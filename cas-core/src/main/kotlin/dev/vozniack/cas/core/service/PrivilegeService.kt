package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.exception.ConflictException
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.PrivilegeRepository
import dev.vozniack.cas.core.repository.specification.PrivilegeQuery
import dev.vozniack.cas.core.repository.specification.Specificable
import dev.vozniack.cas.core.service.common.ContextAwareService
import dev.vozniack.cas.core.types.ScopeType
import java.util.Optional
import java.util.UUID
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class PrivilegeService(
    private val privilegeRepository: PrivilegeRepository
) : ContextAwareService<PrivilegeService>() {

    fun findAll(query: Specificable<Privilege>, pageable: Pageable): Page<Privilege> =
        privilegeRepository.findAll(query.toSpecification(), pageable)

    fun findAllParents(query: PrivilegeQuery): List<Privilege> =
        privilegeRepository.findAll(query.apply { isParent = true }.toSpecification())
            .sortedBy { it.index }

    fun findById(id: UUID): Privilege = privilegeRepository.findById(id).orElseThrow { NotFoundException() }

    fun create(privilege: Privilege): Privilege = privilegeRepository.save(
        privilege.apply { scope = ScopeType.EXTERNAL }
    )

    fun update(id: UUID, privilege: Privilege): Privilege = privilegeRepository.save(
        findById(id).apply {
            name = privilege.name
            code = privilege.code
            description = privilege.description
            index = privilege.index
            parent = privilege.parent
        }
    )

    fun delete(id: UUID) = privilegeRepository.delete(
        Optional.ofNullable(findById(id).takeIf { privilege -> privilege.scope == ScopeType.EXTERNAL })
            .orElseThrow { ConflictException("Can't delete internal privilege") }
    )

    companion object {
        fun get() = get(PrivilegeService::class.java)
    }
}