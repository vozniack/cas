package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.RoleRepository
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class RoleQueryTest @Autowired constructor(
    private val roleRepository: RoleRepository,
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        roleRepository.deleteAll()
        organizationRepository.deleteAll()
    }

    @Test
    fun `get roles by query cases`() {
        val organization = organizationRepository.save(Organization(name = "First organization", code = "ORG_1"))

        roleRepository.saveAll(listOf(
            Role(name = "ADMINISTRATOR", description = "Description", organization = organization),
            Role(name = "MANAGER", description = "Description"))
        )

        var roles = roleRepository.findAll(RoleQuery(name = "ADMINISTRATOR").toSpecification())
        Assertions.assertThat(roles.size).isEqualTo(1)

        roles = roleRepository.findAll(RoleQuery(name = "ADMIN", description = "Description").toSpecification())
        Assertions.assertThat(roles.size).isEqualTo(2)

        roles = roleRepository.findAll(RoleQuery(organizationId = organization.id.toString()).toSpecification())
        Assertions.assertThat(roles.size).isEqualTo(1)
    }
}