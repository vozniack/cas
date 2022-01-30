package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.api.v1.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.api.v1.mapper.Mapper
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.specification.OrganizationQuery
import dev.vozniack.cas.core.repository.specification.PrivilegeQuery
import dev.vozniack.cas.core.repository.specification.RoleQuery
import dev.vozniack.cas.core.repository.specification.UserQuery
import dev.vozniack.cas.core.service.OrganizationService
import dev.vozniack.cas.core.service.PrivilegeService
import dev.vozniack.cas.core.service.RoleService
import dev.vozniack.cas.core.service.UserService
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/v1/admin")
class AdminController(
    private val organizationService: OrganizationService,
    private val organizationMapper: Mapper<Organization, OrganizationDto>,
    private val userService: UserService,
    private val userMapper: Mapper<User, UserDto>,
    private val roleService: RoleService,
    private val roleMapper: Mapper<Role, RoleDto>,
    private val privilegeService: PrivilegeService,
    private val privilegeMapper: Mapper<Privilege, PrivilegeDto>,
) {

    @GetMapping("/organizations")
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasRole('ADMIN')")
    fun getOrganizations(@RequestParam(required = false) search: String?, pageable: Pageable): Page<OrganizationDto> =
        organizationService.findAll(OrganizationQuery(ScopeType.INTERNAL, search, search), pageable)
            .map { organizationMapper.mapToDto(it) }

    @GetMapping("/users")
    @PreAuthorize("hasAuthority('READ_USER') and hasRole('ADMIN')")
    fun getUsers(@RequestParam(required = false) search: String?, pageable: Pageable): Page<UserDto> =
        userService.findAll(UserQuery(ScopeType.INTERNAL, search, search, search), pageable)
            .map { userMapper.mapToDto(it) }

    @GetMapping("/roles")
    @PreAuthorize("hasAuthority('READ_ROLE') and hasRole('ADMIN')")
    fun getRoles(@RequestParam(required = false) search: String?, pageable: Pageable): Page<RoleDto> =
        roleService.findAll(RoleQuery(ScopeType.INTERNAL, search, search), pageable)
            .map { roleMapper.mapToDto(it) }

    @GetMapping("/privileges")
    @PreAuthorize("hasAuthority('READ_PRIVILEGE') and hasRole('ADMIN')")
    fun getPrivileges(@RequestParam(required = false) search: String?, pageable: Pageable): Page<PrivilegeDto> =
        privilegeService.findAll(PrivilegeQuery(ScopeType.INTERNAL, search, search, search), pageable)
            .map { privilegeMapper.mapToDto(it) }
}