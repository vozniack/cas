package dev.vozniack.cas.core.api.controller

import dev.vozniack.cas.core.api.dto.entity.RoleDto
import dev.vozniack.cas.core.api.dto.entity.UserDto
import dev.vozniack.cas.core.api.mapper.toDto
import dev.vozniack.cas.core.api.mapper.toEntity
import dev.vozniack.cas.core.repository.specification.RoleQuery
import dev.vozniack.cas.core.service.RoleService
import dev.vozniack.cas.core.types.ScopeType
import java.util.UUID
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/v1/roles")
class RoleController(
    private val roleService: RoleService
) {

    @GetMapping("/page")
    @PreAuthorize("hasAuthority('READ_ROLE') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(
        @RequestParam(required = false) search: String?,
        @RequestParam(required = false) organizationId: String?,
        pageable: Pageable,
    ): Page<RoleDto> =
        roleService.findAll(RoleQuery(ScopeType.EXTERNAL, search, search, search, organizationId), pageable)
            .map { it.toDto() }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('READ_ROLE') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(
        @RequestParam(required = false) search: String?,
        @RequestParam(required = false) organizationId: String?,
    ): List<RoleDto> = roleService.findAll(RoleQuery(ScopeType.EXTERNAL, search, search, search, organizationId))
        .map { it.toDto() }

    @GetMapping("/internal")
    @PreAuthorize("hasAuthority('READ_ROLE') and hasRole('ADMIN')")
    fun getAllInternal(@RequestParam(required = false) search: String?, pageable: Pageable): Page<RoleDto> =
        roleService.findAll(RoleQuery(ScopeType.INTERNAL, search, search, search), pageable)
            .map { it.toDto() }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('READ_ROLE') and hasAnyRole('ADMIN', 'USER')")
    fun getById(@PathVariable id: UUID): RoleDto = roleService.findById(id).toDto()

    @GetMapping("/{id}/users")
    @PreAuthorize("hasAuthority('READ_ROLE') and hasAuthority('READ_USER') and hasAnyRole('ADMIN', 'USER')")
    fun getUsers(@PathVariable id: UUID): List<UserDto> = roleService.findUsersByRoleId(id).map { it.toDto() }

    @PostMapping
    @PreAuthorize("hasAuthority('CREATE_ROLE') and hasAnyRole('ADMIN', 'USER')")
    fun create(@RequestBody roleDto: RoleDto): RoleDto =
       roleService.create(roleDto.toEntity()).toDto()

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('UPDATE_ROLE') and hasAnyRole('ADMIN', 'USER')")
    fun update(@PathVariable id: UUID, @RequestBody roleDto: RoleDto): RoleDto =
        roleService.update(id, roleDto.toEntity()).toDto()

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('DELETE_ROLE') and hasRole('ADMIN')")
    fun delete(@PathVariable id: UUID) = roleService.delete(id)
}