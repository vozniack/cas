package dev.vozniack.cas.core.security.filter

import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jws
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.User
import org.springframework.web.filter.OncePerRequestFilter
import java.nio.charset.StandardCharsets
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

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

    private fun parseJwtToken(request: HttpServletRequest): String? {
        val header = request.getHeader("Authorization")

        return if (header != null && header.startsWith("Bearer ")) {
            header.substring(7)
        } else null
    }

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