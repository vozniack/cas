package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.time.LocalDateTime
import java.util.UUID

class RoleDto(

    val id: UUID?,

    val scope: ScopeType?,

    val name: String,
    val description: String,

    val organizationId: UUID,

    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null,
)