package dev.vozniack.cas.core.repository

import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface UserRepository : PagingAndSortingRepository<User, UUID>, JpaSpecificationExecutor<User> {

    fun findAllByRolesId(id: UUID): List<User>

    fun countByScope(scope: ScopeType): Long
}