package dev.vozniack.cas.authorizer.service

import dev.vozniack.cas.authorizer.entity.privilege.Privilege
import dev.vozniack.cas.authorizer.entity.privilege.RelatedPrivilege
import dev.vozniack.cas.authorizer.entity.user.User
import dev.vozniack.cas.authorizer.extensions.addPrivilegeIfNotExist
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class PrivilegeService {

    fun collectPrivileges(user: User): List<Privilege> {
        val privileges: MutableList<Privilege> = mutableListOf()

        user.roles.forEach { collectPrivileges(it.privileges, privileges) }
        collectPrivileges(user.privileges, privileges)

        return privileges
    }

    private fun collectPrivileges(relatedPrivileges: List<RelatedPrivilege>, privileges: MutableList<Privilege>) {
        relatedPrivileges.filter { !it.excluded }
            .forEach { privileges.addPrivilegeIfNotExist(it.privilege) }

        relatedPrivileges.filter { it.excluded }
            .map { it.privilege.id }
            .forEach { excludePrivilege(privileges, it) }
    }

    private fun excludePrivilege(privileges: MutableList<Privilege>, excludedPrivilegeId: UUID) {
        privileges.removeIf { it.id == excludedPrivilegeId }

        privileges.filter { it.hasChildren() }
            .forEach { excludePrivilege(it.privileges, excludedPrivilegeId) }
    }
}
