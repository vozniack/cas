package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.time.LocalDateTime
import java.util.UUID

class OrganizationMapperTest @Autowired constructor(
    private val organizationMapper: Mapper<Organization, OrganizationDto>,
) : CasCoreAbstractTest() {

    @Test
    fun `map entity to dto`() {
        val organization = Organization(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL, name = "Organization",
            code = "ORG", description = "Organization description")

        val organizationDto = organizationMapper.mapToDto(organization)

        assertThat(organization.id).isEqualTo(organizationDto.id)
        assertThat(organization.scope).isEqualTo(organizationDto.scope)
        assertThat(organization.name).isEqualTo(organizationDto.name)
        assertThat(organization.code).isEqualTo(organizationDto.code)
        assertThat(organization.description).isEqualTo(organizationDto.description)
        assertThat(organization.createdAt).isEqualTo(organizationDto.createdAt)
        assertThat(organization.updatedAt).isEqualTo(organizationDto.updatedAt)
    }

    @Test
    fun `map dto to entity`() {
        val organizationDto = OrganizationDto(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL, name = "Organization",
            code = "ORG", description = "Organization description", createdAt = LocalDateTime.now(),
            updatedAt = LocalDateTime.now())

        val organization = organizationMapper.mapToEntity(organizationDto)

        assertThat(organizationDto.id).isEqualTo(organization.id)
        assertThat(organizationDto.scope).isEqualTo(organization.scope)
        assertThat(organizationDto.name).isEqualTo(organization.name)
        assertThat(organizationDto.code).isEqualTo(organization.code)
        assertThat(organizationDto.description).isEqualTo(organization.description)
    }
}