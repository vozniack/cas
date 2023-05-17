package dev.vozniack.cas.authorizer.api.controller

import dev.vozniack.cas.authorizer.api.dto.privilege.UserPrivilegesDto
import dev.vozniack.cas.authorizer.api.mapper.toDto
import dev.vozniack.cas.authorizer.exception.NotFoundException
import dev.vozniack.cas.authorizer.extensions.collectMappedPrivileges
import dev.vozniack.cas.authorizer.repository.UserRepository
import dev.vozniack.cas.authorizer.service.PrivilegeService
import java.util.UUID
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/internal")
class InternalController(
    private val userRepository: UserRepository,
    private val privilegeService: PrivilegeService,
) {

    @GetMapping("/user/{userId}/privileges")
    fun getUserPrivileges(@PathVariable("userId") userId: String): UserPrivilegesDto =
        userRepository.findById(UUID.fromString(userId))
            .map { privilegeService.collectPrivileges(it) }
            .map { UserPrivilegesDto(it.map { p -> p.toDto() }, it.collectMappedPrivileges()) }
            .orElseThrow { NotFoundException() }
}
