package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.util.UUID

class UserMapperTest @Autowired constructor(
    private val userMapper: Mapper<User, UserDto>,
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        organizationRepository.deleteAll()
    }

    @Test
    fun `map entity to dto`() {
        val organization = Organization(id = UUID.randomUUID(), name = "Organization", code = "ORG")

        val user = User(id = UUID.randomUUID(), scope = ScopeType.INTERNAL, email = "john.doe@cas.dev",
            password = "pass123!", firstName = "John", lastName = "Doe",
            organization = organization, roles = listOf(Role(id = UUID.randomUUID(),
                name = "ROLE", description = "Description", organization = organization))
        )

        val userDto = userMapper.mapToDto(user)

        assertThat(userDto.id).isEqualTo(user.id)
        assertThat(userDto.scope).isEqualTo(user.scope)
        assertThat(userDto.email).isEqualTo(user.email)
        assertThat(userDto.password).isEqualTo(user.password)
        assertThat(userDto.firstName).isEqualTo(user.firstName)
        assertThat(userDto.lastName).isEqualTo(user.lastName)
        assertThat(userDto.active).isEqualTo(user.active)

        assertThat(userDto.organizationId).isEqualTo(user.organization?.id)
        assertThat(userDto.details?.organizationCode).isEqualTo(organization.code)

        assertThat(userDto.roles.size).isEqualTo(user.roles.size)
        assertThat(userDto.roles[0].id).isEqualTo(user.roles[0].id)
        assertThat(userDto.roles[0].name).isEqualTo(user.roles[0].name)
        assertThat(userDto.roles[0].description).isEqualTo(user.roles[0].description)
    }

    @Test
    fun `map dto to entity`() {
        // organization need to exist in repository due to matching by id

        val organization = organizationRepository.save(
            Organization(id = UUID.randomUUID(), name = "Organization", code = "ORG")
        )

        val userDto = UserDto(id = UUID.randomUUID(), scope = ScopeType.INTERNAL, email = "john.doe@cas.dev",
            password = "pass123!", firstName = "John", lastName = "Doe", active = true,
            organizationId = organization.id!!, roles = listOf(RoleDto(id = UUID.randomUUID(),
                scope = ScopeType.INTERNAL, name = "ROLE", description = "Description",
                organizationId = organization.id!!))
        )

        val user = userMapper.mapToEntity(userDto)

        assertThat(user.id).isEqualTo(userDto.id)
        assertThat(user.scope).isEqualTo(userDto.scope)
        assertThat(user.email).isEqualTo(userDto.email)
        assertThat(user.password).isEqualTo(userDto.password)
        assertThat(user.firstName).isEqualTo(userDto.firstName)
        assertThat(user.lastName).isEqualTo(userDto.lastName)
        assertThat(user.active).isEqualTo(userDto.active)

        assertThat(user.organization?.id).isEqualTo(organization.id)

        assertThat(user.roles.size).isEqualTo(userDto.roles.size)
        assertThat(user.roles[0].id).isEqualTo(userDto.roles[0].id)
        assertThat(user.roles[0].name).isEqualTo(userDto.roles[0].name)
        assertThat(user.roles[0].description).isEqualTo(userDto.roles[0].description)
    }
}