package dev.vozniack.cas.core.repository

import dev.vozniack.cas.core.entity.Role
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface RoleRepository : PagingAndSortingRepository<Role, UUID>