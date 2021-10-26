package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.GroupType
import java.util.*

class GroupDto(

    val id: UUID?,

    val type: GroupType,

    val name: String,
    val description: String,
)