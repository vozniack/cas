package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.details.BasicDetailsDto
import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.service.OrganizationService
import org.springframework.stereotype.Component

@Component
class RoleMapper(
    private val organizationService: OrganizationService,
) : Mapper<Role, RoleDto> {

    override fun mapToDto(entity: Role): RoleDto = RoleDto(
        id = entity.id,
        scope = entity.scope,
        name = entity.name,
        code = entity.code,
        description = entity.description,
        organizationId = entity.organization!!.id!!,
        createdAt = entity.createdAt,
        updatedAt = entity.updatedAt,
        details = BasicDetailsDto(
            organizationCode = entity.organization?.code
        )
    )

    override fun mapToEntity(dto: RoleDto): Role = Role(
        id = dto.id,
        scope = dto.scope,
        name = dto.name,
        code = dto.code,
        description = dto.description,
        organization = dto.organizationId.let { organizationService.findById(it) }
    )
}