package dev.vozniack.cas.authorizer.extensions

import dev.vozniack.cas.authorizer.api.dto.privilege.MappedPrivilegeDto
import dev.vozniack.cas.authorizer.entity.privilege.Privilege

infix fun MutableList<Privilege>.addPrivilegeIfNotExist(privilege: Privilege) {
    if (!this.flattenList(mutableListOf()).contains(privilege)) {
        this.add(privilege)
    }
}

private infix fun MutableList<Privilege>.flattenList(flattenedPrivileges: MutableList<Privilege>): MutableList<Privilege> {
    flattenedPrivileges.addAll(this)

    this.filter { it.hasChildren() }.forEach { it.privileges.flattenList(flattenedPrivileges) }

    return flattenedPrivileges
}

fun List<Privilege>.collectCodes(): List<String> = toMutableList().collectCodes(mutableListOf()).distinct()

private infix fun MutableList<Privilege>.collectCodes(privilegeCodes: MutableList<String>): MutableList<String> {
    privilegeCodes.addAll(this.filter { !it.hasChildren() }.map { it.code })

    this.filter { it.hasChildren() }.forEach { it.privileges.collectCodes(privilegeCodes) }

    return privilegeCodes
}

fun List<Privilege>.collectMappedPrivileges(): List<MappedPrivilegeDto> = toMutableList().collectMappedPrivileges(mutableListOf()).distinct()

private infix fun MutableList<Privilege>.collectMappedPrivileges(privilegeCodes: MutableList<MappedPrivilegeDto>): MutableList<MappedPrivilegeDto> {
    privilegeCodes.addAll(this.filter { !it.hasChildren() }.map { MappedPrivilegeDto(it.id, it.code) })

    this.filter { it.hasChildren() }.forEach { it.privileges.collectMappedPrivileges(privilegeCodes) }

    return privilegeCodes
}
