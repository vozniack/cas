package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.details.OrganizationDetailsDto
import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.service.OrganizationService
import org.springframework.stereotype.Component

@Component
class OrganizationMapper(
    private val organizationService: OrganizationService,
) : Mapper<Organization, OrganizationDto> {

    override fun mapToDto(entity: Organization): OrganizationDto = OrganizationDto(
        id = entity.id,
        scope = entity.scope,
        name = entity.name,
        code = entity.code,
        description = entity.description,
        parentId = entity.parent?.id,
        organizations = entity.organizations?.map { mapToDto(it) },
        createdAt = entity.createdAt,
        updatedAt = entity.updatedAt,
        details = OrganizationDetailsDto(
            users = entity.users.size,
            roles = entity.roles.size,
            privileges = entity.privileges.size
        )
    )

    override fun mapToEntity(dto: OrganizationDto): Organization = Organization(
        id = dto.id,
        scope = dto.scope,
        name = dto.name,
        code = dto.code,
        description = dto.description,
        parent = dto.parentId?.let { organizationService.findById(it) }
    )
}