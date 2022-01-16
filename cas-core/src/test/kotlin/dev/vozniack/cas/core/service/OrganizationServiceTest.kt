package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.exception.ConflictException
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.specification.OrganizationQuery
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import java.util.UUID

class OrganizationServiceTest @Autowired constructor(
    private val organizationService: OrganizationService,
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        organizationRepository.deleteAll()
    }

    @Test
    fun `find page of all organizations`() {
        organizationRepository.saveAll(listOf(
            Organization(name = "First organization", code = "ORG_1"),
            Organization(name = "Second organization", code = "ORG_2")
        ))

        val organizations = organizationService.findAll(OrganizationQuery(), PageRequest.ofSize(1024))

        assertThat(organizations).isInstanceOf(Page::class.java)
        assertThat(organizations.content.size).isEqualTo(2)
    }

    @Test
    fun `find page of filtered organizations`() {
        organizationRepository.saveAll(listOf(
            Organization(name = "First organization", code = "ORG_1"),
            Organization(name = "Second organization", code = "ORG_2")
        ))

        var organizations = organizationService.findAll(
            OrganizationQuery(name = "first"), PageRequest.ofSize(1024)
        )

        assertThat(organizations).isInstanceOf(Page::class.java)
        assertThat(organizations.content.size).isEqualTo(1)
        assertThat(organizations.content[0].name).isEqualTo("First organization")

        organizations = organizationService.findAll(
            OrganizationQuery(code = "2"), PageRequest.ofSize(1024)
        )

        assertThat(organizations).isInstanceOf(Page::class.java)
        assertThat(organizations.content.size).isEqualTo(1)
        assertThat(organizations.content[0].name).isEqualTo("Second organization")

        organizations = organizationService.findAll(
            OrganizationQuery(name = "first", code = "2"), PageRequest.ofSize(1024)
        )

        assertThat(organizations).isInstanceOf(Page::class.java)
        assertThat(organizations.content.size).isEqualTo(2)
    }

    @Test
    fun `find organization by id`() {
        val savedOrganization = organizationRepository.save(Organization(name = "First organization", code = "ORG_1"))

        val organization = organizationService.findById(savedOrganization.id!!)
        assertThat(organization.id).isEqualTo(savedOrganization.id)
    }

    @Test
    fun `find organization by not existing id`() {
        Assertions.assertThatThrownBy { organizationService.findById(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `create new organization`() {
        val organization = organizationService.create(Organization(
            name = "Organization", code = "ORG", description = "Organization description"
        ))

        assertThat(organization).isNotNull
        assertThat(organization.id).isNotNull
        assertThat(organization.name).isEqualTo("Organization")
        assertThat(organization.code).isEqualTo("ORG")
        assertThat(organization.description).isEqualTo("Organization description")
    }

    @Test
    fun `update organization`() {
        val organization = organizationRepository.save(Organization(
            name = "Organization", code = "ORG", description = "Organization description"
        ))

        val updatedOrganization = organizationService.update(organization.id!!, organization.apply {
            name = "Updated organization"
            code = "UPDT_ORG"
            description = "Updated organization description"
        })

        assertThat(updatedOrganization).isNotNull
        assertThat(updatedOrganization.id).isNotNull
        assertThat(updatedOrganization.name).isEqualTo("Updated organization")
        assertThat(updatedOrganization.code).isEqualTo("UPDT_ORG")
        assertThat(updatedOrganization.description).isEqualTo("Updated organization description")
    }

    @Test
    fun `update not existing organization`() {
        Assertions.assertThatThrownBy { organizationService.update(UUID.randomUUID(), Organization()) }
            .isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `delete organization`() {
        val organization = organizationRepository.save(Organization(
            name = "Organization", code = "ORG", description = "Organization description"
        ))

        organizationService.delete(organization.id!!)
        assertThat(organizationRepository.findById(organization.id!!)).isEmpty
    }

    @Test
    fun `delete internal organization`() {
        val organization = organizationRepository.save(Organization(
            name = "Organization", scope = ScopeType.INTERNAL, code = "ORG", description = "Organization description"
        ))

        Assertions.assertThatThrownBy { organizationService.delete(organization.id!!) }
            .isInstanceOf(ConflictException::class.java)
    }

    @Test
    fun `delete not existing organization`() {
        Assertions.assertThatThrownBy { organizationService.delete(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }
}