package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.util.*

class GroupDto(

    val id: UUID?,

    val scope: ScopeType,

    val name: String,
    val description: String,
)