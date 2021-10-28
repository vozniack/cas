package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.api.v1.mapper.Mapper
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.service.RoleService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/v1/roles")
class RoleController(
    private val roleService: RoleService,
    private val roleMapper: Mapper<Role, RoleDto>,
    private val userMapper: Mapper<User, UserDto>,
) {

    @GetMapping
    fun getAll(pageable: Pageable): Page<RoleDto> = roleService.findAll(pageable).map(roleMapper::mapToDto)

    @GetMapping("/{id}")
    fun getById(@PathVariable id: UUID): RoleDto = roleMapper.mapToDto(roleService.findById(id))

    @GetMapping("/{id}/users")
    fun getUsers(@PathVariable id: UUID): List<UserDto> = roleService.findUsersByRoleId(id).map(userMapper::mapToDto)

    @PostMapping
    fun create(@RequestBody roleDto: RoleDto): RoleDto =
        roleMapper.mapToDto(roleService.create(roleMapper.mapToEntity(roleDto)))

    @PutMapping("/{id}")
    fun update(@PathVariable id: UUID, @RequestBody roleDto: RoleDto): RoleDto =
        roleMapper.mapToDto(roleService.update(id, roleMapper.mapToEntity(roleDto)))

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: UUID) = roleService.delete(id)
}