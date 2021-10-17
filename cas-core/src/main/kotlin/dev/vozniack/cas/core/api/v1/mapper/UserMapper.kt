package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.UserDto
import dev.vozniack.cas.core.entity.User
import org.springframework.stereotype.Component

@Component
class UserMapper : Mapper<User, UserDto> {

    override fun mapToDto(entity: User): UserDto =
        UserDto(entity.id, entity.email, entity.password, entity.firstName, entity.lastName)

    override fun mapToEntity(dto: UserDto): User =
        User(dto.id, dto.email, dto.password, dto.firstName, dto.lastName)
}