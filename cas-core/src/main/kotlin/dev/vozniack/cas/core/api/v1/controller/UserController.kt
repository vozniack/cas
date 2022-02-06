package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.api.v1.dto.request.UserEmailRequestDto
import dev.vozniack.cas.core.api.v1.dto.request.UserPasswordRequestDto
import dev.vozniack.cas.core.api.v1.mapper.Mapper
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.specification.UserQuery
import dev.vozniack.cas.core.service.UserService
import dev.vozniack.cas.core.types.ScopeType
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
import java.util.UUID

@RestController
@RequestMapping("/api/v1/users")
class UserController(
    val userService: UserService,
    val userMapper: Mapper<User, UserDto>,
) {

    @GetMapping
    @PreAuthorize("hasAuthority('READ_USER') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(
        @RequestParam(required = false) search: String?,
        @RequestParam(required = false) organizationId: String?,
        pageable: Pageable,
    ): Page<UserDto> =
        userService.findAll(UserQuery(ScopeType.EXTERNAL, search, search, search, organizationId), pageable)
            .map(userMapper::mapToDto)

    @GetMapping("/internal")
    @PreAuthorize("hasAuthority('READ_USER') and hasRole('ADMIN')")
    fun getAllInternal(@RequestParam(required = false) search: String?, pageable: Pageable): Page<UserDto> =
        userService.findAll(UserQuery(ScopeType.INTERNAL, search, search, search), pageable)
            .map(userMapper::mapToDto)

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('READ_USER') and hasAnyRole('ADMIN', 'USER')")
    fun getById(@PathVariable id: UUID): UserDto = userMapper.mapToDto(userService.findById(id))

    @PostMapping
    @PreAuthorize("hasAuthority('CREATE_USER') and hasAnyRole('ADMIN', 'USER')")
    fun create(@RequestBody userDto: UserDto): UserDto =
        userMapper.mapToDto(userService.create(userMapper.mapToEntity(userDto)))

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('UPDATE_USER') and hasAnyRole('ADMIN', 'USER')")
    fun update(@PathVariable id: UUID, @RequestBody userDto: UserDto): UserDto =
        userMapper.mapToDto(userService.update(id, userMapper.mapToEntity(userDto)))

    @PutMapping("/{id}/email")
    @PreAuthorize("hasAnyAuthority('UPDATE_USER', 'UPDATE_EMAIL') and hasAnyRole('ADMIN', 'USER')")
    fun updateEmail(@PathVariable id: UUID, @RequestBody request: UserEmailRequestDto): UserDto =
        userMapper.mapToDto(userService.updateEmail(id, request))

    @PutMapping("/{id}/password")
    @PreAuthorize("hasAnyAuthority('UPDATE_USER', 'UPDATE_PASSWORD') and hasAnyRole('ADMIN', 'USER')")
    fun updatePassword(@PathVariable id: UUID, @RequestBody request: UserPasswordRequestDto): UserDto =
        userMapper.mapToDto(userService.updatePassword(id, request))

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('REMOVE_USER') and hasRole('ADMIN')")
    fun delete(@PathVariable id: UUID) = userService.delete(id)
}