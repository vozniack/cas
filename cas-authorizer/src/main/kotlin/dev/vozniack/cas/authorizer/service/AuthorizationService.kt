package dev.vozniack.cas.authorizer.service

import dev.vozniack.cas.authorizer.api.v1.dto.LoginRequest
import dev.vozniack.cas.authorizer.api.v1.dto.LoginResponse
import dev.vozniack.cas.authorizer.entity.Privilege
import dev.vozniack.cas.authorizer.entity.Role
import dev.vozniack.cas.authorizer.entity.User
import dev.vozniack.cas.authorizer.exception.UnauthorizedException
import dev.vozniack.cas.authorizer.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class AuthorizationService(private val userRepository: UserRepository) {

    fun login(loginRequest: LoginRequest): LoginResponse =
        userRepository.findUserByEmailAndPassword(loginRequest.email, loginRequest.password)
            .map(this::buildResponse)
            .orElseThrow { UnauthorizedException() }

    private fun buildResponse(user: User): LoginResponse {
        val roles = collectRoles(user)
        val privileges = collectPrivileges(user)

        return LoginResponse("bearer", roles, privileges)
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