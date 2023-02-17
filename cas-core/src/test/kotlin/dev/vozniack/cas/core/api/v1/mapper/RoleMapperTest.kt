package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.types.ScopeType
import java.util.UUID
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class RoleMapperTest @Autowired constructor(
    private val roleMapper: Mapper<Role, RoleDto>,
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @Test
    fun `map entity to dto`() {
        val organization = Organization(id = UUID.randomUUID(), code = "ORG")

        val role = Role(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL,
            name = "ROLE", description = "Description", organization = organization)
        val roleDto = roleMapper.mapToDto(role)

        assertThat(roleDto.id).isEqualTo(role.id)
        assertThat(roleDto.scope).isEqualTo(role.scope)
        assertThat(roleDto.name).isEqualTo(role.name)
        assertThat(roleDto.code).isEqualTo(role.code)
        assertThat(roleDto.description).isEqualTo(role.description)
        assertThat(roleDto.organizationId).isEqualTo(role.organization!!.id!!)
    }

    @Test
    fun `map dto to entity`() {
        // organization need to exist in repository due to matching by id

        val organization = organizationRepository.save(
            Organization(id = UUID.randomUUID(), name = "Organization", code = "ORG")
        )

        val roleDto = RoleDto(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL,
            name = "ROLE", code = "ROLE", description = "Description", organizationId = organization.id!!)
        val role = roleMapper.mapToEntity(roleDto)

        assertThat(role.id).isEqualTo(roleDto.id)
        assertThat(role.scope).isEqualTo(roleDto.scope)
        assertThat(role.name).isEqualTo(roleDto.name)
        assertThat(role.code).isEqualTo(roleDto.code)
        assertThat(role.description).isEqualTo(roleDto.description)
        assertThat(role.organization!!.id).isEqualTo(roleDto.organizationId)
    }
}