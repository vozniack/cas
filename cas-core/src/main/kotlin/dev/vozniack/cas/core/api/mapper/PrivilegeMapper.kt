package dev.vozniack.cas.core.api.mapper

import dev.vozniack.cas.core.api.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.service.OrganizationService
import dev.vozniack.cas.core.service.PrivilegeService

fun Privilege.toDto(): PrivilegeDto = PrivilegeDto(
    id = this.id,
    scope = this.scope,
    name = this.name,
    code = this.code,
    description = this.description,
    index = this.index,
    organizationId = this.organization!!.id!!,
    parentId = this.parent?.id,
    privileges = this.privileges?.map { it.toDto() },
    createdAt = this.createdAt,
    updatedAt = this.updatedAt,
)

fun PrivilegeDto.toEntity(): Privilege = Privilege(
    id = this.id,
    scope = this.scope,
    name = this.name,
    code = this.code,
    description = this.description,
    index = this.index,
    organization = this.organizationId.let { OrganizationService.get().findById(it) },
    parent = this.parentId?.let { PrivilegeService.get().findById(it) },
    privileges = null
)