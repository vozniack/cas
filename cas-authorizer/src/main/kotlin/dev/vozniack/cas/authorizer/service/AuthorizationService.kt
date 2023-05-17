package dev.vozniack.cas.authorizer.service

import dev.vozniack.cas.authorizer.api.dto.login.LoginRequest
import dev.vozniack.cas.authorizer.aspects.LogAuthorizationHistory
import dev.vozniack.cas.authorizer.entity.user.Role
import dev.vozniack.cas.authorizer.entity.user.User
import dev.vozniack.cas.authorizer.exception.UnauthorizedException
import dev.vozniack.cas.authorizer.extensions.collectCodes
import dev.vozniack.cas.authorizer.repository.UserRepository
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import java.nio.charset.StandardCharsets
import java.util.Date
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthorizationService(
    private val privilegeService: PrivilegeService,
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder,
) {

    @Value("\${cas.security.jwt.secret}")
    lateinit var jwtSecret: String

    @LogAuthorizationHistory
    fun login(loginRequest: LoginRequest): String = userRepository.findUserByEmail(loginRequest.email)
        .filter { user -> passwordEncoder.matches(loginRequest.password, user.password) }
        .map { user -> buildToken(user) }
        .orElseThrow { UnauthorizedException() }

    private fun buildToken(user: User): String = Jwts.builder()
        .setSubject(user.email)
        .addClaims(mapOf(Pair("roles", user.roles.map(Role::code))) as Map<String, Any>?)
        .addClaims(mapOf(Pair("privileges", privilegeService.collectPrivileges(user).collectCodes())) as Map<String, Any>?)
        .signWith(Keys.hmacShaKeyFor(jwtSecret.toByteArray(StandardCharsets.UTF_8)))
        .setExpiration(Date(Date().time + (1000 * 60 * 60 * 12))) // 12 hours
        .compact()
}
