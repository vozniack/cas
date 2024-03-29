package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.specification.OrganizationQuery
import dev.vozniack.cas.core.repository.specification.Specificable
import dev.vozniack.cas.core.service.common.ContextAwareService
import dev.vozniack.cas.core.types.ScopeType
import io.github.oshai.KLogging
import java.util.UUID
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

@Service
class OrganizationService(
    private val organizationRepository: OrganizationRepository
) : ContextAwareService<OrganizationService>() {

    fun findAll(query: Specificable<Organization>, pageable: Pageable): Page<Organization> =
        organizationRepository.findAll(query.toSpecification(), pageable)

    fun findAll(query: Specificable<Organization>): MutableIterable<Organization> =
        organizationRepository.findAll(query.toSpecification())

    fun findAllParents(query: OrganizationQuery): List<Organization> =
        organizationRepository.findAll(query.apply { isParent = true }.toSpecification())

    fun findInternal(): Organization = organizationRepository.findAll(
        OrganizationQuery(scope = ScopeType.INTERNAL).toSpecification()
    ).first()

    fun findById(id: UUID): Organization = organizationRepository.findById(id)
        .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND, "Not found organization with id $id") }

    fun create(organization: Organization): Organization = organizationRepository.save(
        organization.apply { scope = ScopeType.EXTERNAL }
    )

    fun update(id: UUID, organization: Organization): Organization = organizationRepository.save(
        findById(id).apply {
            name = organization.name
            code = organization.code
            description = organization.description
        }
    )

    fun delete(id: UUID) {
        logger.debug { "Deleting organization with id $id" }

        organizationRepository.delete(
            findById(id).takeIf { it.scope == ScopeType.EXTERNAL }
                ?: throw ResponseStatusException(HttpStatus.CONFLICT, "Can't delete internal organization")
        )
    }

    companion object : KLogging() {
        fun get() = get(OrganizationService::class.java)
    }
}