package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.UserDto
import dev.vozniack.cas.core.api.v1.mapper.UserMapper
import dev.vozniack.cas.core.exception.ConflictException
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.service.UserService
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/v1/users")
class UserController(val userService: UserService, val userMapper: UserMapper) {

    @GetMapping("/{id}")
    fun getById(@PathVariable id: String): Mono<UserDto> =
        userService.findById(id).map(userMapper::mapToDto)
            .switchIfEmpty(Mono.error(NotFoundException()))

    @GetMapping
    fun getAll(): Flux<UserDto> = userService.findAll().map(userMapper::mapToDto)

    @PostMapping
    fun create(@RequestBody userDto: UserDto): Mono<UserDto> =
        userService.create(userMapper.mapToEntity(userDto)).map(userMapper::mapToDto)

    @PutMapping("/{id}")
    fun update(@PathVariable id: String, @RequestBody userDto: UserDto): Mono<UserDto> =
        userService.update(id, userMapper.mapToEntity(userDto)).map(userMapper::mapToDto)
            .switchIfEmpty(Mono.error(ConflictException()))

    @PutMapping("/{id}/email")
    fun updateEmail(@PathVariable id: String, @RequestBody email: String): Mono<UserDto> =
        userService.updateEmail(id, email).map(userMapper::mapToDto)
            .switchIfEmpty(Mono.error(ConflictException()))

    @PutMapping("/{id}/password")
    fun updatePassword(@PathVariable id: String, @RequestBody password: String): Mono<UserDto> =
        userService.updatePassword(id, password).map(userMapper::mapToDto)
            .switchIfEmpty(Mono.error(ConflictException()))

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: String) = userService.delete(id)
}