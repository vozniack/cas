package dev.vozniack.cas.core.api.v1.dto.entity

import java.util.*

class PrivilegeDto(
    var id: UUID?,

    var name: String,
    var code: String,
    var description: String?,

    var parentId: UUID?,

    var privileges: List<PrivilegeDto>?
)