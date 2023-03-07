package dev.vozniack.cas.core.repository

import dev.vozniack.cas.core.entity.User
import java.util.UUID
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : PagingAndSortingRepository<User, UUID>, JpaSpecificationExecutor<User> {

    fun findAllByRolesId(id: UUID): List<User>
}
