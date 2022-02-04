package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.api.v1.dto.operational.DashboardStatisticsDto
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.PrivilegeRepository
import dev.vozniack.cas.core.repository.RoleRepository
import dev.vozniack.cas.core.repository.UserRepository
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.stereotype.Service

@Service
class StatisticsService(
    private val organizationRepository: OrganizationRepository,
    private val userRepository: UserRepository,
    private val roleRepository: RoleRepository,
    private val privilegeRepository: PrivilegeRepository
) {

    fun getDashboardStatistics(): DashboardStatisticsDto = DashboardStatisticsDto(
        organizationsAmount = organizationRepository.countByScope(ScopeType.EXTERNAL),
        usersAmount = userRepository.countByScope(ScopeType.EXTERNAL),
        rolesAmount = roleRepository.countByScope(ScopeType.EXTERNAL),
        privilegesAmount = privilegeRepository.countByScope(ScopeType.EXTERNAL),
    )
}