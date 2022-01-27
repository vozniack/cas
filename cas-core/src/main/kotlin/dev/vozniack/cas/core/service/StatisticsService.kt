package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.api.v1.dto.operational.DashboardStatisticsDto
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.PrivilegeRepository
import dev.vozniack.cas.core.repository.RoleRepository
import dev.vozniack.cas.core.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class StatisticsService(
    private val organizationRepository: OrganizationRepository,
    private val userRepository: UserRepository,
    private val roleRepository: RoleRepository,
    private val privilegeRepository: PrivilegeRepository
) {

    fun getDashboardStatistics(): DashboardStatisticsDto = DashboardStatisticsDto(
        organizationsAmount = organizationRepository.count(),
        usersAmount = userRepository.count(),
        rolesAmount = roleRepository.count(),
        privilegesAmount = privilegeRepository.count()
    )
}