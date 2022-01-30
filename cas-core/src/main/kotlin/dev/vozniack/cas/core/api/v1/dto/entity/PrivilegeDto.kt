package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.time.LocalDateTime
import java.util.UUID

class PrivilegeDto(

    val id: UUID?,

    val scope: ScopeType?,

    val name: String,
    val code: String,
    val description: String?,

    val index: Int?,

    val organizationId: UUID?,

    val parentId: UUID?,

    val privileges: List<PrivilegeDto>?,

    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null,
)