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
        id = entity.id,
        scope = entity.scope,
        name = entity.name,
        code = entity.code,
        description = entity.description,
        index = entity.index,
        organizationId = entity.organization!!.id!!,
        parentId = entity.parent?.id,
        privileges = entity.privileges?.map { mapToDto(it) },
        createdAt = entity.createdAt,
        updatedAt = entity.updatedAt,
    )

    override fun mapToEntity(dto: PrivilegeDto): Privilege = Privilege(
        id = dto.id,
        scope = dto.scope,
        name = dto.name,
        code = dto.code,
        description = dto.description,
        index = dto.index,
        organization = dto.organizationId.let { organizationService.findById(it) },
        parent = dto.parentId?.let { privilegeService.findById(it) },
        privileges = null
    )
}