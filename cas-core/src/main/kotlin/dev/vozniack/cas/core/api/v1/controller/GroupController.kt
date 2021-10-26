package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.GroupDto
import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.api.v1.mapper.Mapper
import dev.vozniack.cas.core.entity.Group
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.service.GroupService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/v1/groups")
class GroupController(
    private val groupService: GroupService,
    private val groupMapper: Mapper<Group, GroupDto>,
    private val userMapper: Mapper<User, UserDto>,
) {

    @GetMapping
    fun getAll(pageable: Pageable): Page<GroupDto> = groupService.findAll(pageable).map(groupMapper::mapToDto)

    @GetMapping("/{id}")
    fun getById(@PathVariable id: UUID): GroupDto = groupMapper.mapToDto(groupService.findById(id))

    @GetMapping("/{id}/users")
    fun getUsers(@PathVariable id: UUID): List<UserDto> = groupService.findUsers(id).map(userMapper::mapToDto)

    @PostMapping
    fun create(@RequestBody groupDto: GroupDto): GroupDto =
        groupMapper.mapToDto(groupService.create(groupMapper.mapToEntity(groupDto)))

    @PutMapping("/{id}")
    fun update(@PathVariable id: UUID, @RequestBody groupDto: GroupDto): GroupDto =
        groupMapper.mapToDto(groupService.update(id, groupMapper.mapToEntity(groupDto)))

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: UUID) = groupService.delete(id)
}