package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.api.v1.dto.request.UserEmailRequestDto
import dev.vozniack.cas.core.api.v1.dto.request.UserPasswordRequestDto
import dev.vozniack.cas.core.api.v1.mapper.toDto
import dev.vozniack.cas.core.api.v1.mapper.toEntity
import dev.vozniack.cas.core.repository.specification.UserQuery
import dev.vozniack.cas.core.service.UserService
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
@RequestMapping("/api/v1/users")
class UserController(
    val userService: UserService
) {

    @GetMapping("/page")
    @PreAuthorize("hasAuthority('READ_USER') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(
        @RequestParam(required = false) search: String?,
        @RequestParam(required = false) organizationId: String?,
        pageable: Pageable,
    ): Page<UserDto> =
        userService.findAll(UserQuery(ScopeType.EXTERNAL, search, search, search, search, organizationId), pageable)
            .map { it.toDto() }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('READ_USER') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(
        @RequestParam(required = false) search: String?,
        @RequestParam(required = false) organizationId: String?,
    ): List<UserDto> =
        userService.findAll(UserQuery(ScopeType.EXTERNAL, search, search, search, search, organizationId))
            .map { it.toDto() }

    @GetMapping("/internal")
    @PreAuthorize("hasAuthority('READ_USER') and hasRole('ADMIN')")
    fun getAllInternal(@RequestParam(required = false) search: String?, pageable: Pageable): Page<UserDto> =
        userService.findAll(UserQuery(ScopeType.INTERNAL, search, search, search, search), pageable)
            .map { it.toDto() }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('READ_USER') and hasAnyRole('ADMIN', 'USER')")
    fun getById(@PathVariable id: UUID): UserDto = userService.findById(id).toDto()

    @PostMapping
    @PreAuthorize("hasAuthority('CREATE_USER') and hasAnyRole('ADMIN', 'USER')")
    fun create(@RequestBody userDto: UserDto): UserDto =
        userService.create(userDto.toEntity()).toDto()

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('UPDATE_USER') and hasAnyRole('ADMIN', 'USER')")
    fun update(@PathVariable id: UUID, @RequestBody userDto: UserDto): UserDto =
        userService.update(id, userDto.toEntity()).toDto()

    @PutMapping("/{id}/email")
    @PreAuthorize("hasAnyAuthority('UPDATE_USER', 'UPDATE_EMAIL') and hasAnyRole('ADMIN', 'USER')")
    fun updateEmail(@PathVariable id: UUID, @RequestBody request: UserEmailRequestDto): UserDto =
        userService.updateEmail(id, request).toDto()

    @PutMapping("/{id}/password")
    @PreAuthorize("hasAnyAuthority('UPDATE_USER', 'UPDATE_PASSWORD') and hasAnyRole('ADMIN', 'USER')")
    fun updatePassword(@PathVariable id: UUID, @RequestBody request: UserPasswordRequestDto): UserDto =
        userService.updatePassword(id, request).toDto()

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('REMOVE_USER') and hasRole('ADMIN')")
    fun delete(@PathVariable id: UUID) = userService.delete(id)
}