package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.entity.User
import org.springframework.stereotype.Component

@Component
class UserMapper(private val groupMapper: GroupMapper) : Mapper<User, UserDto> {

    override fun mapToDto(entity: User): UserDto = UserDto(
        entity.id,
        entity.scope,
        entity.email,
        entity.password,
        entity.firstName,
        entity.lastName,
        entity.groups.map(groupMapper::mapToDto)
    )

    override fun mapToEntity(dto: UserDto): User = User(
        dto.id,
        dto.scope,
        dto.email,
        dto.password,
        dto.firstName,
        dto.lastName,
        dto.groups.map(groupMapper::mapToEntity)
    )
}