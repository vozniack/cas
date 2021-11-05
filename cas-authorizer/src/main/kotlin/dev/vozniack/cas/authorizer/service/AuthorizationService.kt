package dev.vozniack.cas.authorizer.service

import dev.vozniack.cas.authorizer.api.v1.dto.LoginRequest
import dev.vozniack.cas.authorizer.exception.UnauthorizedException
import dev.vozniack.cas.authorizer.repository.UserRepository
import dev.vozniack.cas.authorizer.aspects.LogAuthorizationHistory
import dev.vozniack.cas.authorizer.util.TokenBuilder
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthorizationService(
    private val tokenBuilder: TokenBuilder,
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder,
) {

    @Value("\${cas.security.jwt.secret}")
    lateinit var jwtSecret: String

    @LogAuthorizationHistory
    fun login(loginRequest: LoginRequest): String =
        userRepository.findUserByEmail(loginRequest.email)
            .filter { user -> passwordEncoder.matches(loginRequest.password, user.password) }
            .map { user -> tokenBuilder.buildToken(user, jwtSecret) }
            .orElseThrow { UnauthorizedException() }
}