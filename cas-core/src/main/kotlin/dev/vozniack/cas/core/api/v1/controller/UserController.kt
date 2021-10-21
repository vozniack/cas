package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.UserDto
import dev.vozniack.cas.core.api.v1.dto.request.UserEmailRequestDto
import dev.vozniack.cas.core.api.v1.dto.request.UserPasswordRequestDto
import dev.vozniack.cas.core.api.v1.mapper.UserMapper
import dev.vozniack.cas.core.service.UserService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/api/v1/users")
class UserController(val userService: UserService, val userMapper: UserMapper) {

    @GetMapping("/{id}")
    fun getById(@PathVariable id: UUID): UserDto = userMapper.mapToDto(userService.findById(id))

    @GetMapping
    fun getAll(): List<UserDto> = userService.findAll().map(userMapper::mapToDto)

    @PostMapping
    fun create(@RequestBody userDto: UserDto): UserDto =
        userMapper.mapToDto(userService.create(userMapper.mapToEntity(userDto)))

    @PutMapping("/{id}")
    fun update(@PathVariable id: UUID, @RequestBody userDto: UserDto): UserDto =
        userMapper.mapToDto(userService.update(id, userMapper.mapToEntity(userDto)))

    @PutMapping("/{id}/email")
    fun updateEmail(@PathVariable id: UUID, @RequestBody request: UserEmailRequestDto): UserDto =
        userMapper.mapToDto(userService.updateEmail(id, request))

    @PutMapping("/{id}/password")
    fun updatePassword(@PathVariable id: UUID, @RequestBody request: UserPasswordRequestDto): UserDto =
        userMapper.mapToDto(userService.updatePassword(id, request))

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: UUID) = userService.delete(id)
}