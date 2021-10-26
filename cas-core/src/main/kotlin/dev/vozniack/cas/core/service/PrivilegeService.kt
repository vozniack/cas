package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.PrivilegeRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class PrivilegeService(private val privilegeRepository: PrivilegeRepository) {

    fun findAll(): List<Privilege> = privilegeRepository.findAll()
        .filter { privilege -> Optional.ofNullable(privilege.parent).isEmpty }

    fun findById(id: UUID): Privilege = privilegeRepository.findById(id).orElseThrow { NotFoundException() }

    fun create(privilege: Privilege): Privilege = privilegeRepository.save(privilege)

    fun update(id: UUID, privilege: Privilege): Privilege = privilegeRepository.save(
        findById(id).apply {
            name = privilege.name
            code = privilege.code
            description = privilege.description
            parent = privilege.parent
        }
    )

    fun delete(id: UUID) = privilegeRepository.delete(findById(id))
}