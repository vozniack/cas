package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.entity.User
import org.springframework.stereotype.Component

@Component
class UserMapper(private val roleMapper: RoleMapper) : Mapper<User, UserDto> {

    override fun mapToDto(entity: User): UserDto = UserDto(
        entity.id,
        entity.scope,
        entity.email,
        entity.password,
        entity.firstName,
        entity.lastName,
        entity.roles.map(roleMapper::mapToDto),
        entity.createdAt,
        entity.updatedAt
    )

    override fun mapToEntity(dto: UserDto): User = User(
        dto.id,
        dto.scope,
        dto.email,
        dto.password,
        dto.firstName,
        dto.lastName,
        dto.roles.map(roleMapper::mapToEntity)
    )
}