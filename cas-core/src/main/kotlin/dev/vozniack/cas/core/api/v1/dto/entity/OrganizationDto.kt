package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.time.LocalDateTime
import java.util.UUID

class OrganizationDto(

    val id: UUID?,

    val scope: ScopeType?,

    val name: String?,
    val code: String?,
    val description: String?,

    val parentId: UUID?,

    val organizations: List<OrganizationDto>?,

    val createdAt: LocalDateTime?,
    val updatedAt: LocalDateTime?,
)