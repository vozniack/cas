package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.time.LocalDateTime
import java.util.UUID

class OrganizationDto(

    var id: UUID?,

    var scope: ScopeType?,

    var name: String?,
    var code: String?,
    var description: String?,

    var createdAt: LocalDateTime?,
    var updatedAt: LocalDateTime?,
)