package dev.vozniack.cas.core.repository

import dev.vozniack.cas.core.entity.Role
import java.util.UUID
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface RoleRepository : PagingAndSortingRepository<Role, UUID>, JpaSpecificationExecutor<Role>
