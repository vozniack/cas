package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.PrivilegeRepository
import dev.vozniack.cas.core.repository.RoleRepository
import dev.vozniack.cas.core.repository.UserRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class StatisticsServiceTest @Autowired constructor(
    private val statisticsService: StatisticsService,
    private val organizationRepository: OrganizationRepository,
    private val userRepository: UserRepository,
    private val roleRepository: RoleRepository,
    private val privilegeRepository: PrivilegeRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        organizationRepository.deleteAll()
        userRepository.deleteAll()
        roleRepository.deleteAll()
        privilegeRepository.deleteAll()
    }

    @Test
    fun `get dashboard statistics`() {
        organizationRepository.saveAll(listOf(Organization(), Organization()))
        userRepository.saveAll(listOf(User(), User(), User()))
        roleRepository.saveAll(listOf(Role(), Role(), Role(), Role(), Role()))
        privilegeRepository.saveAll(listOf(Privilege(), Privilege()))

        val dashboardStatistics = statisticsService.getDashboardStatistics()

        assertThat(dashboardStatistics.organizationsAmount).isEqualTo(2)
        assertThat(dashboardStatistics.usersAmount).isEqualTo(3)
        assertThat(dashboardStatistics.rolesAmount).isEqualTo(5)
        assertThat(dashboardStatistics.privilegesAmount).isEqualTo(2)
    }
}