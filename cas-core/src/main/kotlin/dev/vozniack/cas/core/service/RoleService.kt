package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.RoleRepository
import dev.vozniack.cas.core.repository.UserRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class RoleService(private val roleRepository: RoleRepository, private val userRepository: UserRepository) {

    fun findAll(pageable: Pageable): Page<Role> = roleRepository.findAll(pageable)

    fun findById(id: UUID): Role = roleRepository.findById(id).orElseThrow { NotFoundException() }

    fun findUsersByRoleId(id: UUID): List<User> = userRepository.findAllByRolesId(id)

    fun create(role: Role): Role = roleRepository.save(role)

    fun update(id: UUID, role: Role): Role = roleRepository.save(
        findById(id).apply {
            name = role.name
            description = role.description
        }
    )

    fun delete(id: UUID) = roleRepository.delete(findById(id))
}