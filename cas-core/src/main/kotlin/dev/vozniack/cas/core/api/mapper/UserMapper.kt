package dev.vozniack.cas.core.api.mapper

import dev.vozniack.cas.core.api.dto.entity.UserDto
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.service.OrganizationService

fun User.toDto(): UserDto = UserDto(
    id = this.id,
    scope = this.scope,
    email = this.email,
    password = this.password,
    firstName = this.firstName,
    lastName = this.lastName,
    active = this.active,
    organizations = this.organizations.map { it.toUserOrganizationDto() },
    createdAt = this.createdAt,
    updatedAt = this.updatedAt,
)

fun UserDto.toEntity(): User = User(
    id = this.id,
    scope = this.scope,
    email = this.email,
    password = this.password,
    firstName = this.firstName,
    lastName = this.lastName,
    active = this.active,
    organizations = this.organizations.map { OrganizationService.get().findById(it.id!!) },
)