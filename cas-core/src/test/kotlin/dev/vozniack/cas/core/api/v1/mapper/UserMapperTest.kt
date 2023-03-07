package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.dto.entity.UserDto
import dev.vozniack.cas.core.api.dto.entity.UserOrganizationDto
import dev.vozniack.cas.core.api.mapper.toDto
import dev.vozniack.cas.core.api.mapper.toEntity
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.types.ScopeType
import java.util.UUID
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class UserMapperTest @Autowired constructor(
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        organizationRepository.deleteAll()
    }

    @Test
    fun `map entity to dto`() {
        val organization = Organization(id = UUID.randomUUID(), name = "Organization", code = "ORG")

        val user = User(
            id = UUID.randomUUID(), scope = ScopeType.INTERNAL, email = "john.doe@cas.dev",
            password = "pass123!", firstName = "John", lastName = "Doe",
            organizations = listOf(organization), roles = listOf(
                Role(
                    id = UUID.randomUUID(),
                    name = "ROLE", description = "Description", organization = organization
                )
            )
        )

        val userDto = user.toDto()

        assertThat(userDto.id).isEqualTo(user.id)
        assertThat(userDto.scope).isEqualTo(user.scope)
        assertThat(userDto.email).isEqualTo(user.email)
        assertThat(userDto.password).isEqualTo(user.password)
        assertThat(userDto.firstName).isEqualTo(user.firstName)
        assertThat(userDto.lastName).isEqualTo(user.lastName)
        assertThat(userDto.active).isEqualTo(user.active)

        assertThat(userDto.organizations[0].id).isEqualTo(user.organizations[0].id)
    }

    @Test
    fun `map dto to entity`() {
        // organization need to exist in repository due to matching by id

        val organization = organizationRepository.save(
            Organization(id = UUID.randomUUID(), name = "Organization", code = "ORG", icon = "icon")
        )

        val userDto = UserDto(
            id = UUID.randomUUID(), scope = ScopeType.INTERNAL, email = "john.doe@cas.dev",
            password = "pass123!", firstName = "John", lastName = "Doe", active = true,
            organizations = listOf(UserOrganizationDto(organization.id, organization.name, organization.code, organization.icon)),
        )

        val user = userDto.toEntity()

        assertThat(user.id).isEqualTo(userDto.id)
        assertThat(user.scope).isEqualTo(userDto.scope)
        assertThat(user.email).isEqualTo(userDto.email)
        assertThat(user.password).isEqualTo(userDto.password)
        assertThat(user.firstName).isEqualTo(userDto.firstName)
        assertThat(user.lastName).isEqualTo(userDto.lastName)
        assertThat(user.active).isEqualTo(userDto.active)

        assertThat(user.organizations[0].id).isEqualTo(organization.id)
        assertThat(user.organizations[0].name).isEqualTo(organization.name)
        assertThat(user.organizations[0].code).isEqualTo(organization.code)
        assertThat(user.organizations[0].icon).isEqualTo(organization.icon)
    }
}