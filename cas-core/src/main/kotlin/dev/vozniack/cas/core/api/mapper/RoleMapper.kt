package dev.vozniack.cas.core.api.mapper

import dev.vozniack.cas.core.api.dto.entity.RoleDto
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.service.OrganizationService

fun Role.toDto(): RoleDto = RoleDto(
    id = this.id,
    scope = this.scope,
    name = this.name,
    code = this.code,
    description = this.description,
    organizationId = this.organization!!.id!!,
    createdAt = this.createdAt,
    updatedAt = this.updatedAt
)

fun RoleDto.toEntity(): Role = Role(
    id = this.id,
    scope = this.scope,
    name = this.name,
    code = this.code,
    description = this.description,
    organization = this.organizationId.let { OrganizationService.get().findById(it) }
)