package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.service.OrganizationService
import org.springframework.stereotype.Component

@Component
class RoleMapper(
    private val organizationService: OrganizationService,
) : Mapper<Role, RoleDto> {

    override fun mapToDto(entity: Role): RoleDto = RoleDto(
        entity.id,
        entity.scope,
        entity.name,
        entity.description,
        entity.organization!!.id!!,
        entity.createdAt,
        entity.updatedAt
    )

    override fun mapToEntity(dto: RoleDto): Role = Role(
        dto.id,
        dto.scope,
        dto.name,
        dto.description,
        dto.organizationId.let { organizationService.findById(it) }
    )
}