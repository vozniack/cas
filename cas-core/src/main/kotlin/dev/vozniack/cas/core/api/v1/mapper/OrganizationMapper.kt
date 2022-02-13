package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.service.OrganizationService
import org.springframework.stereotype.Component

@Component
class OrganizationMapper(
    private val organizationService: OrganizationService,
) : Mapper<Organization, OrganizationDto> {

    override fun mapToDto(entity: Organization): OrganizationDto = OrganizationDto(
        entity.id,
        entity.scope,
        entity.name,
        entity.code,
        entity.description,
        entity.parent?.id,
        entity.organizations?.map { mapToDto(it) },
        entity.createdAt,
        entity.updatedAt
    )

    override fun mapToEntity(dto: OrganizationDto): Organization = Organization(
        dto.id,
        dto.scope,
        dto.name,
        dto.code,
        dto.description,
        dto.parentId?.let { organizationService.findById(it) }
    )
}