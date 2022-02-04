package dev.vozniack.cas.core.repository

import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface OrganizationRepository : PagingAndSortingRepository<Organization, UUID>, JpaSpecificationExecutor<Organization> {

    fun countByScope(scope: ScopeType): Long
}