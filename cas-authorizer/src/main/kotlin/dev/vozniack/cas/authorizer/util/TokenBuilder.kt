package dev.vozniack.cas.authorizer.util

import dev.vozniack.cas.authorizer.entity.user.Privilege
import dev.vozniack.cas.authorizer.entity.user.Role
import dev.vozniack.cas.authorizer.entity.user.User
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.stereotype.Component
import java.nio.charset.StandardCharsets
import java.util.*

@Component
class TokenBuilder {

    fun buildToken(user: User, jwtSecret: String): String {
        return Jwts.builder()
            .setSubject(user.email)
            .addClaims(mapOf(Pair("roles", collectRoles(user))) as Map<String, Any>?)
            .addClaims(mapOf(Pair("privileges", collectPrivileges(user))) as Map<String, Any>?)
            .signWith(Keys.hmacShaKeyFor(jwtSecret.toByteArray(StandardCharsets.UTF_8)))
            .setExpiration(Date(Date().time + (1000 * 60 * 60 * 12))) // 12 hours
            .compact()
    }

    private fun collectRoles(user: User): List<String> = user.roles.map(Role::code)

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