package dev.vozniack.cas.core.api.v1.dto.entity

import dev.vozniack.cas.core.types.ScopeType
import java.util.*

class PrivilegeDto(

    var id: UUID?,

    val scope: ScopeType,

    var name: String,
    var code: String,
    var description: String?,

    var index: Int?,

    var parentId: UUID?,

    var privileges: List<PrivilegeDto>?,
)