package dev.vozniack.cas.authorizer.api.dto.privilege

data class UserPrivilegesDto(

    val privileges: List<PrivilegeDto> = emptyList(),

    val mappedPrivileges: List<MappedPrivilegeDto> = emptyList()
)
