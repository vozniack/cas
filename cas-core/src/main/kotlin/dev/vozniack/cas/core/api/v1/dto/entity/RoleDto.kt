package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.time.LocalDateTime
import java.util.*

class RoleDto(

    val id: UUID?,

    val scope: ScopeType,

    val name: String,
    val description: String,

    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null
)