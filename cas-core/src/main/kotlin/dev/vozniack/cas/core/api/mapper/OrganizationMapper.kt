package dev.vozniack.cas.core.api.mapper

import dev.vozniack.cas.core.api.dto.entity.OrganizationDto
import dev.vozniack.cas.core.api.dto.entity.UserOrganizationDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.service.OrganizationService

fun Organization.toDto(): OrganizationDto = OrganizationDto(
    id = this.id,
    scope = this.scope,
    name = this.name,
    code = this.code,
    description = this.description,
    icon = this.icon,
    active = this.active,
    parentId = this.parent?.id,
    organizations = this.organizations?.map { it.toDto() },
    roles = this.roles.map { it.toDto() },
    privileges = this.privileges.map { it.toDto() },
    users = this.users.map { it.toDto() },
    createdAt = this.createdAt,
    updatedAt = this.updatedAt,
)

fun Organization.toUserOrganizationDto(): UserOrganizationDto = UserOrganizationDto(
    id = this.id,
    name = this.name,
    code = this.code,
    icon = this.icon
)

fun OrganizationDto.toEntity(): Organization = Organization(
    id = this.id,
    scope = this.scope,
    name = this.name,
    code = this.code,
    description = this.description,
    icon = this.icon,
    active = this.active,
    parent = this.parentId?.let { OrganizationService.get().findById(it) }
)