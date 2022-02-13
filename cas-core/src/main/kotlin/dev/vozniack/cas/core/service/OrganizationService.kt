package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.exception.ConflictException
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.specification.OrganizationQuery
import dev.vozniack.cas.core.repository.specification.Specificable
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import java.util.Optional
import java.util.UUID

@Service
class OrganizationService(private val organizationRepository: OrganizationRepository) {

    fun findAll(query: Specificable<Organization>, pageable: Pageable): Page<Organization> =
        organizationRepository.findAll(query.toSpecification(), pageable)

    fun findAll(query: Specificable<Organization>): MutableIterable<Organization> =
        organizationRepository.findAll(query.toSpecification())

    fun findAllParents(query: OrganizationQuery): List<Organization> =
        organizationRepository.findAll(query.apply { isParent = true }.toSpecification())

    fun findInternal(): Organization = organizationRepository.findAll(
        OrganizationQuery(scope = ScopeType.INTERNAL).toSpecification()
    ).first()

    fun findById(id: UUID): Organization = organizationRepository.findById(id).orElseThrow { NotFoundException() }

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

    fun delete(id: UUID) = organizationRepository.delete(
        Optional.ofNullable(findById(id).takeIf { organization -> organization.scope == ScopeType.EXTERNAL })
            .orElseThrow { ConflictException("Can't delete internal organization") }
    )
}