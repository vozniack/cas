package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.util.UUID

class RoleMapperTest @Autowired constructor(
    private val roleMapper: Mapper<Role, RoleDto>,
) : CasCoreAbstractTest() {

    @Test
    fun `map entity to dto`() {
        val role = Role(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL,
            name = "ROLE", description = "Description")
        val roleDto = roleMapper.mapToDto(role)

        assertThat(role.id).isEqualTo(roleDto.id)
        assertThat(role.scope).isEqualTo(roleDto.scope)
        assertThat(role.name).isEqualTo(roleDto.name)
        assertThat(role.description).isEqualTo(roleDto.description)
    }

    @Test
    fun `map dto to entity`() {
        val roleDto = RoleDto(id = UUID.randomUUID(), scope = ScopeType.EXTERNAL,
            name = "ROLE", description = "Description")
        val role = roleMapper.mapToEntity(roleDto)

        assertThat(roleDto.id).isEqualTo(role.id)
        assertThat(roleDto.scope).isEqualTo(role.scope)
        assertThat(roleDto.name).isEqualTo(role.name)
        assertThat(roleDto.description).isEqualTo(role.description)
    }
}