package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.api.v1.mapper.Mapper
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.service.RoleService
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
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping("api/v1/roles")
class RoleController(
    private val roleService: RoleService,
    private val roleMapper: Mapper<Role, RoleDto>,
    private val userMapper: Mapper<User, UserDto>,
) {

    @GetMapping
    @PreAuthorize("hasAuthority('READ_ROLE') and hasRole('ADMIN')")
    fun getAll(pageable: Pageable): Page<RoleDto> = roleService.findAll(pageable).map(roleMapper::mapToDto)

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('READ_ROLE') and hasRole('ADMIN')")
    fun getById(@PathVariable id: UUID): RoleDto = roleMapper.mapToDto(roleService.findById(id))

    @GetMapping("/{id}/users")
    @PreAuthorize("hasAuthority('READ_ROLE') and hasAuthority('READ_USER') and hasRole('ADMIN')")
    fun getUsers(@PathVariable id: UUID): List<UserDto> = roleService.findUsersByRoleId(id).map(userMapper::mapToDto)

    @PostMapping
    @PreAuthorize("hasAuthority('CREATE_ROLE') and hasRole('ADMIN')")
    fun create(@RequestBody roleDto: RoleDto): RoleDto =
        roleMapper.mapToDto(roleService.create(roleMapper.mapToEntity(roleDto)))

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('UPDATE_ROLE') and hasRole('ADMIN')")
    fun update(@PathVariable id: UUID, @RequestBody roleDto: RoleDto): RoleDto =
        roleMapper.mapToDto(roleService.update(id, roleMapper.mapToEntity(roleDto)))

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('DELETE_ROLE') and hasRole('ADMIN')")
    fun delete(@PathVariable id: UUID) = roleService.delete(id)
}