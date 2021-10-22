package dev.vozniack.cas.core.api.v1.dto.entity

import java.util.*

class UserDto(

    val id: UUID?,

    val email: String,
    val password: String?,

    val firstName: String?,
    val lastName: String?,

    val groups: List<GroupDto> = listOf(),
)
