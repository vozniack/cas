package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.time.LocalDateTime
import java.util.UUID

class OrganizationMapperTest @Autowired constructor(
    private val organizationMapper: Mapper<Organization, OrganizationDto>,
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @Test
    fun `map entity to dto`() {
        val parentOrganization = Organization(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL, name = "Parent")
        val childOrganization = Organization(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL, name = "child")

        val id = UUID.randomUUID()
        val organization = Organization(id = id, scope = ScopeType.EXTERNAL, name = "Organization",
            code = "ORG", description = "Organization description",
            parent = parentOrganization, organizations = listOf(childOrganization),
            roles = listOf(Role(name = "Role", organization = Organization(id = id))),
            users = listOf(User(firstName = "User", organization = Organization(id = id))),
            privileges = listOf(Privilege(name = "Privilege", organization = Organization(id = id))))

        val organizationDto = organizationMapper.mapToDto(organization)

        assertThat(organizationDto.id).isEqualTo(organization.id)
        assertThat(organizationDto.scope).isEqualTo(organization.scope)
        assertThat(organizationDto.name).isEqualTo(organization.name)
        assertThat(organizationDto.code).isEqualTo(organization.code)
        assertThat(organizationDto.description).isEqualTo(organization.description)
        assertThat(organizationDto.parentId).isEqualTo(parentOrganization.id)
        assertThat(organizationDto.organizations!![0].id).isEqualTo(childOrganization.id)
        assertThat(organizationDto.roles!![0].name).isEqualTo("Role")
        assertThat(organizationDto.users!![0].firstName).isEqualTo("User")
        assertThat(organizationDto.privileges!![0].name).isEqualTo("Privilege")
        assertThat(organizationDto.createdAt).isEqualTo(organization.createdAt)
        assertThat(organizationDto.updatedAt).isEqualTo(organization.updatedAt)
    }

    @Test
    fun `map dto to entity`() {
        val parentOrganization = organizationRepository.save(
            Organization(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL, name = "Parent")
        )

        val organizationDto = OrganizationDto(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL, name = "Organization",
            code = "ORG", description = "Organization description", createdAt = LocalDateTime.now(),
            updatedAt = LocalDateTime.now(), parentId = parentOrganization.id, organizations = listOf())

        val organization = organizationMapper.mapToEntity(organizationDto)

        assertThat(organization.id).isEqualTo(organizationDto.id)
        assertThat(organization.scope).isEqualTo(organizationDto.scope)
        assertThat(organization.name).isEqualTo(organizationDto.name)
        assertThat(organization.code).isEqualTo(organizationDto.code)
        assertThat(organization.description).isEqualTo(organizationDto.description)
        assertThat(organization.parent!!.id).isEqualTo(organizationDto.parentId)
    }
}