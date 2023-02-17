package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.service.OrganizationService
import org.springframework.stereotype.Component

@Component
class UserMapper(
    private val organizationService: OrganizationService
) : Mapper<User, UserDto> {

    override fun mapToDto(entity: User): UserDto = UserDto(
        id = entity.id,
        scope = entity.scope,
        email = entity.email,
        password = entity.password,
        firstName = entity.firstName,
        lastName = entity.lastName,
        active = entity.active,
        organizationId = entity.organization!!.id!!,
        organizationCode = entity.organization!!.code,
        createdAt = entity.createdAt,
        updatedAt = entity.updatedAt,
    )

    override fun mapToEntity(dto: UserDto): User = User(
        id = dto.id,
        scope = dto.scope,
        email = dto.email,
        password = dto.password,
        firstName = dto.firstName,
        lastName = dto.lastName,
        active = dto.active,
        organization = dto.organizationId.let { organizationService.findById(it) },
    )
}