package dev.vozniack.cas.authorizer.service

import dev.vozniack.cas.authorizer.api.v1.dto.LoginRequest
import dev.vozniack.cas.authorizer.entity.Privilege
import dev.vozniack.cas.authorizer.entity.Role
import dev.vozniack.cas.authorizer.entity.User
import dev.vozniack.cas.authorizer.exception.UnauthorizedException
import dev.vozniack.cas.authorizer.repository.UserRepository
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.nio.charset.StandardCharsets

@Service
class AuthorizationService(private val userRepository: UserRepository) {

    @Value("\${cas.security.jwt.secret}")
    lateinit var secret: String

    fun login(loginRequest: LoginRequest): String =
        userRepository.findUserByEmailAndPassword(loginRequest.email, loginRequest.password)
            .map(this::buildToken)
            .orElseThrow { UnauthorizedException() }

    private fun buildToken(user: User): String {
        return Jwts.builder()
            .setSubject(user.email)
            .addClaims(mapOf(Pair("roles", collectRoles(user))) as Map<String, Any>?)
            .addClaims(mapOf(Pair("privileges", collectPrivileges(user))) as Map<String, Any>?)
            .signWith(Keys.hmacShaKeyFor(secret.toByteArray(StandardCharsets.UTF_8)))
            .compact()
    }

    private fun collectRoles(user: User): List<String> = user.roles.map(Role::name)

    private fun collectPrivileges(user: User): List<String> {
        val privileges = mutableListOf<String>()

        user.roles.forEach { role ->
            role.privileges.forEach { privilege -> collectPrivileges(privileges, privilege) }
        }

        user.privileges.forEach { privilege -> collectPrivileges(privileges, privilege) }

        return privileges.distinct()
    }

    private fun collectPrivileges(privileges: MutableList<String>, privilege: Privilege) {
        if (privilege.privileges!!.isEmpty()) {
            privileges.add(privilege.code)
        } else {
            privilege.privileges?.forEach { childPrivilege -> collectPrivileges(privileges, childPrivilege) }
        }
    }
}