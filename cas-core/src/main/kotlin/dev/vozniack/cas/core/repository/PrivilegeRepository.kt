package dev.vozniack.cas.core.repository

import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface PrivilegeRepository : PagingAndSortingRepository<Privilege, UUID>, JpaSpecificationExecutor<Privilege> {

    fun countByScope(scope: ScopeType): Long
}