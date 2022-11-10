package dev.vozniack.cas.authorizer.utils

import dev.vozniack.cas.authorizer.entity.privilege.Privilege

infix fun MutableList<Privilege>.addPrivilegeIfNotExist(privilege: Privilege) {
    if (!this.flattenList(mutableListOf()).contains(privilege)) {
        this.add(privilege)
    }
}

infix fun MutableList<Privilege>.flattenList(flattenedPrivileges: MutableList<Privilege>): MutableList<Privilege> {
    flattenedPrivileges.addAll(this)

    this.filter { it.hasChildren() }
        .forEach { it.privileges.flattenList(flattenedPrivileges) }

    return flattenedPrivileges
}

infix fun MutableList<Privilege>.collectCodes(privilegeCodes: MutableList<String>): MutableList<String> {
    this.filter { it.hasChildren() }
        .forEach { it.privileges.collectCodes(privilegeCodes) }

    privilegeCodes.addAll(this.filter { !it.hasChildren() }.map { it.code })

    return privilegeCodes
}
