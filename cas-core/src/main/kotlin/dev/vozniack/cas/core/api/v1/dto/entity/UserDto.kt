package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.time.LocalDateTime
import java.util.UUID

class UserDto(

    val id: UUID?,

    val scope: ScopeType?,

    val email: String,
    val password: String?,

    val firstName: String?,
    val lastName: String?,

    val organizationId: UUID?,
    val roles: List<RoleDto> = listOf(),

    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null,
)
