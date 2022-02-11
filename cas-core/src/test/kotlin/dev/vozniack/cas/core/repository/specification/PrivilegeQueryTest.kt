package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.PrivilegeRepository
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class PrivilegeQueryTest @Autowired constructor(
    private val privilegeRepository: PrivilegeRepository,
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        privilegeRepository.deleteAll()
        organizationRepository.deleteAll()
    }

    @Test
    fun `get privileges by query cases`() {
        val organization = organizationRepository.save(Organization(name = "First organization", code = "ORG_1"))

        val firstParent = privilegeRepository.save(
            Privilege(
                name = "First privilege", code = "FIRST_PRIVILEGE", description = "First privilege desc",
                scope = ScopeType.INTERNAL, organization = organization
            )
        )

        privilegeRepository.saveAll(listOf(
            Privilege(name = "Second privilege", code = "SECOND_PRIVILEGE", scope = ScopeType.INTERNAL),
            Privilege(name = "Third privilege", code = "THIRD_PRIVILEGE", scope = ScopeType.INTERNAL),
            Privilege(name = "Child privilege", code = "CHILD_PRIVILEGE", description = "Child privilege desc",
                scope = ScopeType.INTERNAL, parent = firstParent, organization = organization),
            Privilege(name = "Fourth privilege", code = "FOURTH_PRIVILEGE", scope = ScopeType.EXTERNAL),
        ))

        var privileges = privilegeRepository.findAll(PrivilegeQuery(scope = ScopeType.EXTERNAL).toSpecification())
        Assertions.assertThat(privileges.size).isEqualTo(1)

        privileges = privilegeRepository.findAll(PrivilegeQuery(name = "first").toSpecification())
        Assertions.assertThat(privileges.size).isEqualTo(1)

        privileges = privilegeRepository.findAll(PrivilegeQuery(code = "first").toSpecification())
        Assertions.assertThat(privileges.size).isEqualTo(1)

        privileges = privilegeRepository.findAll(PrivilegeQuery(description = "child").toSpecification())
        Assertions.assertThat(privileges.size).isEqualTo(1)

        privileges = privilegeRepository.findAll(PrivilegeQuery(scope = ScopeType.EXTERNAL).toSpecification())
        Assertions.assertThat(privileges.size).isEqualTo(1)

        privileges =
            privilegeRepository.findAll(PrivilegeQuery(organizationId = organization.id.toString()).toSpecification())
        Assertions.assertThat(privileges.size).isEqualTo(2)

        privileges = privilegeRepository.findAll(PrivilegeQuery(isParent = true).toSpecification())
        Assertions.assertThat(privileges.size).isEqualTo(4)
    }
}