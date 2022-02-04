package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.service.OrganizationService
import dev.vozniack.cas.core.service.PrivilegeService
import org.springframework.stereotype.Component

@Component
class PrivilegeMapper(
    private val privilegeService: PrivilegeService,
    private val organizationService: OrganizationService,
) : Mapper<Privilege, PrivilegeDto> {

    override fun mapToDto(entity: Privilege): PrivilegeDto = PrivilegeDto(
        entity.id,
        entity.scope,
        entity.name,
        entity.code,
        entity.description,
        entity.index,
        entity.organization?.id,
        entity.parent?.id,
        entity.privileges?.map { mapToDto(it) },
        entity.createdAt,
        entity.updatedAt
    )

    override fun mapToEntity(dto: PrivilegeDto): Privilege = Privilege(
        dto.id,
        dto.scope,
        dto.name,
        dto.code,
        dto.description,
        dto.index,
        dto.organizationId?.let { organizationService.findById(it) },
        dto.parentId?.let { privilegeService.findById(it) },
        null
    )
}