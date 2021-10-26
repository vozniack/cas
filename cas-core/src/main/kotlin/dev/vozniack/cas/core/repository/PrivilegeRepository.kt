package dev.vozniack.cas.core.repository

import dev.vozniack.cas.core.entity.Privilege
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface PrivilegeRepository : PagingAndSortingRepository<Privilege, UUID> {

    fun findAllByParentIsNull(pageable: Pageable): Page<Privilege>
}