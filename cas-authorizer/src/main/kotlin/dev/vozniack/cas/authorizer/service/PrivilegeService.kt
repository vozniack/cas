package dev.vozniack.cas.authorizer.service

import dev.vozniack.cas.authorizer.entity.privilege.Privilege
import dev.vozniack.cas.authorizer.entity.privilege.RelatedPrivilege
import dev.vozniack.cas.authorizer.entity.user.User
import dev.vozniack.cas.authorizer.utils.addPrivilegeIfNotExist
import dev.vozniack.cas.authorizer.utils.collectCodes
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class PrivilegeService {

    fun collectPrivileges(user: User): List<String> {
        val collectedPrivileges: MutableList<Privilege> = mutableListOf()

        user.roles.forEach { collectPrivileges(it.privileges.toMutableList(), collectedPrivileges) }
        collectPrivileges(user.privileges.toMutableList(), collectedPrivileges)

        return collectedPrivileges.collectCodes(mutableListOf()).distinct()
    }

    private fun collectPrivileges(
        userPrivileges: MutableList<RelatedPrivilege>,
        collectedPrivileges: MutableList<Privilege>
    ) {
        userPrivileges.filter { !it.excluded }
            .forEach { collectedPrivileges.addPrivilegeIfNotExist(it.privilege) }

        userPrivileges.filter { it.excluded }
            .map { it.privilege.id }
            .forEach { excludePrivilege(collectedPrivileges, it) }
    }

    private fun excludePrivilege(collectedPrivileges: MutableList<Privilege>, excludedPrivilege: UUID) {
        collectedPrivileges.removeIf { it.id == excludedPrivilege }

        collectedPrivileges.filter { it.hasChildren() }
            .forEach { excludePrivilege(it.privileges, excludedPrivilege) }
    }
}
