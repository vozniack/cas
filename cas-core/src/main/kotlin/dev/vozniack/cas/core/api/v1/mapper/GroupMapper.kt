package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.GroupDto
import dev.vozniack.cas.core.entity.Group
import org.springframework.stereotype.Component

@Component
class GroupMapper : Mapper<Group, GroupDto> {

    override fun mapToDto(entity: Group): GroupDto = GroupDto(
        entity.id,
        entity.scope,
        entity.name,
        entity.description,
        entity.createdAt,
        entity.updatedAt
    )

    override fun mapToEntity(dto: GroupDto): Group = Group(
        dto.id,
        dto.scope,
        dto.name,
        dto.description,
    )
}