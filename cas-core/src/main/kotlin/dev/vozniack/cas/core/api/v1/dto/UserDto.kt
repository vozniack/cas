package dev.vozniack.cas.core.api.v1.dto

import java.util.*

data class UserDto(

    val id: UUID?,

    val email: String,
    val password: String,

    val firstName: String,
    val lastName: String,
)
