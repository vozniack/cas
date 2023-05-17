package dev.vozniack.cas.authorizer.api.dto.privilege

import java.util.UUID

data class PrivilegeDto(

    val id: UUID?,

    val name: String,
    val code: String,

    val parentId: UUID?,

    val privileges: List<PrivilegeDto>?
)
