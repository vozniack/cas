package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.RoleRepository
import dev.vozniack.cas.core.repository.UserRepository
import dev.vozniack.cas.core.repository.specification.Specificable
import dev.vozniack.cas.core.types.ScopeType
import io.github.oshai.KLogging
import java.util.UUID
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

@Service
class RoleService(private val roleRepository: RoleRepository, private val userRepository: UserRepository) {

    fun findAll(query: Specificable<Role>, pageable: Pageable): Page<Role> =
        roleRepository.findAll(query.toSpecification(), pageable)

    fun findAll(query: Specificable<Role>): List<Role> = roleRepository.findAll(query.toSpecification())

    fun findById(id: UUID): Role = roleRepository.findById(id)
        .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND, "Not found role with id $id") }

    fun findUsersByRoleId(id: UUID): List<User> = userRepository.findAllByRolesId(id)

    fun create(role: Role): Role = roleRepository.save(role)

    fun update(id: UUID, role: Role): Role = roleRepository.save(
        findById(id).apply {
            name = role.name
            description = role.description
        }
    )

    fun delete(id: UUID) {
        logger.debug { "Deleting role with id $id" }

        roleRepository.delete(
            findById(id).takeIf { it.scope == ScopeType.EXTERNAL }
                ?: throw ResponseStatusException(HttpStatus.CONFLICT, "Can't delete internal role")
        )
    }

    companion object : KLogging()
}