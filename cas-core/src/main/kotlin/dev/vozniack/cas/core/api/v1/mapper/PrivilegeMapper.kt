package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.service.PrivilegeService
import org.springframework.stereotype.Component
import java.util.*

@Component
class PrivilegeMapper(private val privilegeService: PrivilegeService) : Mapper<Privilege, PrivilegeDto> {

    override fun mapToDto(entity: Privilege): PrivilegeDto = PrivilegeDto(
        entity.id,
        entity.name,
        entity.code,
        entity.description,
        Optional.ofNullable(entity.parent).map { parent -> parent.id }.orElse(null),
        Optional.ofNullable(entity.privileges)
            .map { privileges -> privileges.map { privilege -> mapToDto(privilege) } }
            .orElse(null)
    )

    override fun mapToEntity(dto: PrivilegeDto): Privilege = Privilege(
        dto.id,
        dto.name,
        dto.code,
        dto.description,
        Optional.ofNullable(dto.parentId)
            .map { parentId -> privilegeService.findById(parentId) }
            .orElse(null),
        null
    )
}