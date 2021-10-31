package dev.vozniack.cas.authorizer.api.v1.dto

class LoginResponse(

    val token: String,

    val roles: List<String>,

    val privileges: List<String>
)