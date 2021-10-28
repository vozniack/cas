package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.time.LocalDateTime
import java.util.*

class UserDto(

    val id: UUID?,

    val scope: ScopeType,

    val email: String,
    val password: String?,

    val firstName: String?,
    val lastName: String?,

    val groups: List<GroupDto> = listOf(),

    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null
)
