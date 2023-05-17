package dev.vozniack.cas.authorizer.security

import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jws
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import java.nio.charset.StandardCharsets
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import org.springframework.http.HttpMethod
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.User
import org.springframework.security.web.util.matcher.AntPathRequestMatcher
import org.springframework.security.web.util.matcher.NegatedRequestMatcher
import org.springframework.web.filter.OncePerRequestFilter

class AuthenticationFilter(private val jwtSecret: String) : OncePerRequestFilter() {

    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain,
    ) {
        val token = parseJwtToken(request) ?: return unauthorizedResponse(response, "Token is not present")
        val loggedUser = buildLoggedUser(token) ?: return unauthorizedResponse(response, "Token is not valid")

        SecurityContextHolder.getContext().authentication = loggedUser
        filterChain.doFilter(request, response)
    }

    override fun shouldNotFilter(request: HttpServletRequest): Boolean {
        return NegatedRequestMatcher(AntPathRequestMatcher("api/auth", HttpMethod.POST.name)).matches(request)
    }

    private fun parseJwtToken(request: HttpServletRequest): String? =
        request.getHeader("Authorization")
            .takeIf { it != null && it.startsWith("Bearer ") && it.split(" ").size == 2 }
            ?.substring(7)

    private fun buildLoggedUser(token: String): UsernamePasswordAuthenticationToken? {
        val parsedToken: Jws<Claims> = Jwts.parserBuilder()
            .setSigningKey(Keys.hmacShaKeyFor(jwtSecret.toByteArray(StandardCharsets.UTF_8)))
            .build()
            .parseClaimsJws(token)

        val email: String = parsedToken.body.subject ?: return null
        val authorities = mapRoles(parsedToken) + mapPrivileges(parsedToken)

        return UsernamePasswordAuthenticationToken(User(email, "password", authorities), email, authorities)
    }

    private fun mapRoles(parsedToken: Jws<Claims>): List<SimpleGrantedAuthority> =
        (parsedToken.body["roles"] as List<*>).map { role -> SimpleGrantedAuthority("ROLE_" + role.toString()) }

    private fun mapPrivileges(parsedToken: Jws<Claims>): List<SimpleGrantedAuthority> =
        (parsedToken.body["privileges"] as List<*>).map { privilege -> SimpleGrantedAuthority(privilege.toString()) }

    private fun unauthorizedResponse(response: HttpServletResponse, msg: String) {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, msg)
    }
}
