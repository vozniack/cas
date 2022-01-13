package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.entity.Organization
import org.springframework.stereotype.Component

@Component
class OrganizationMapper : Mapper<Organization, OrganizationDto> {

    override fun mapToDto(entity: Organization): OrganizationDto = OrganizationDto(
        entity.id,
        entity.scope,
        entity.name,
        entity.code,
        entity.description,
        entity.createdAt,
        entity.updatedAt
    )

    override fun mapToEntity(dto: OrganizationDto): Organization = Organization(
        dto.id,
        dto.scope,
        dto.name,
        dto.code,
        dto.description
    )
}