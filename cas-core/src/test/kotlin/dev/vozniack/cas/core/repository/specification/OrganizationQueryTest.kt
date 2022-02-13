package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.repository.OrganizationRepository
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class OrganizationQueryTest @Autowired constructor(
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        organizationRepository.deleteAll()
    }

    @Test
    fun `get organizations by query cases`() {
        val parent = organizationRepository.save(Organization(name = "Parent", code = "PAR"))

        organizationRepository.saveAll(listOf(
            Organization(name = "First organization", code = "ORG_1", parent = parent),
            Organization(name = "Second organization", code = "ORG_2", parent = parent)
        ))

        var organizations = organizationRepository.findAll(OrganizationQuery(name = "first").toSpecification())
        Assertions.assertThat(organizations.size).isEqualTo(1)

        organizations = organizationRepository.findAll(OrganizationQuery(code = "2").toSpecification())
        Assertions.assertThat(organizations.size).isEqualTo(1)

        organizations = organizationRepository.findAll(OrganizationQuery(name = "first", code = "2").toSpecification())
        Assertions.assertThat(organizations.size).isEqualTo(2)

        organizations = organizationRepository.findAll(OrganizationQuery(isParent = true).toSpecification())
        Assertions.assertThat(organizations.size).isEqualTo(1)
    }
}