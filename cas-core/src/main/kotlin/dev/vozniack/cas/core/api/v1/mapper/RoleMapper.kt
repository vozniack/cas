package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.entity.Role
import org.springframework.stereotype.Component

@Component
class RoleMapper : Mapper<Role, RoleDto> {

    override fun mapToDto(entity: Role): RoleDto = RoleDto(
        entity.id,
        entity.scope,
        entity.name,
        entity.description,
        entity.createdAt,
        entity.updatedAt
    )

    override fun mapToEntity(dto: RoleDto): Role = Role(
        dto.id,
        dto.scope,
        dto.name,
        dto.description,
    )
}