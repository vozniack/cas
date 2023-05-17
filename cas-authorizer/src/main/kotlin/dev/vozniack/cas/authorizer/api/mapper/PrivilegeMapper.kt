package dev.vozniack.cas.authorizer.api.mapper

import dev.vozniack.cas.authorizer.api.dto.privilege.PrivilegeDto
import dev.vozniack.cas.authorizer.entity.privilege.Privilege

fun Privilege.toDto(): PrivilegeDto = PrivilegeDto(
    id = this.id,
    name = this.name,
    code = this.code,
    parentId = this.parent?.id,
    privileges = this.privileges.map { it.toDto() }
)
