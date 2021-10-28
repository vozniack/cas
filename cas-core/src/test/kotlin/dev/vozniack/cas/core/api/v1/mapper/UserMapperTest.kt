package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.GroupDto
import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.entity.Group
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.util.*

class UserMapperTest @Autowired constructor(
    private val userMapper: Mapper<User, UserDto>,
) : CasCoreAbstractTest() {

    @Test
    fun `map entity to dto`() {
        val user = User(id = UUID.randomUUID(), scope = ScopeType.INTERNAL, email = "john.doe@cas.dev",
            password = "pass123!", firstName = "John", lastName = "Doe",
            groups = listOf(Group(id = UUID.randomUUID(), name = "Group", description = "Description"))
        )

        val userDto = userMapper.mapToDto(user)

        assertThat(userDto.id).isEqualTo(user.id)
        assertThat(userDto.scope).isEqualTo(user.scope)
        assertThat(userDto.email).isEqualTo(user.email)
        assertThat(userDto.password).isEqualTo(user.password)
        assertThat(userDto.firstName).isEqualTo(user.firstName)
        assertThat(userDto.lastName).isEqualTo(user.lastName)

        assertThat(userDto.groups.size).isEqualTo(user.groups.size)
        assertThat(userDto.groups[0].id).isEqualTo(user.groups[0].id)
        assertThat(userDto.groups[0].name).isEqualTo(user.groups[0].name)
        assertThat(userDto.groups[0].description).isEqualTo(user.groups[0].description)
    }

    @Test
    fun `map dto to entity`() {
        val userDto = UserDto(id = UUID.randomUUID(), scope = ScopeType.INTERNAL, email = "john.doe@cas.dev",
            password = "pass123!", firstName = "John", lastName = "Doe",
            groups = listOf(GroupDto(id = UUID.randomUUID(), scope = ScopeType.INTERNAL, name = "Group",
                description = "Description"))
        )

        val user = userMapper.mapToEntity(userDto)

        assertThat(user.id).isEqualTo(userDto.id)
        assertThat(user.scope).isEqualTo(userDto.scope)
        assertThat(user.email).isEqualTo(userDto.email)
        assertThat(user.password).isEqualTo(userDto.password)
        assertThat(user.firstName).isEqualTo(userDto.firstName)
        assertThat(user.lastName).isEqualTo(userDto.lastName)

        assertThat(user.groups.size).isEqualTo(userDto.groups.size)
        assertThat(user.groups[0].id).isEqualTo(userDto.groups[0].id)
        assertThat(user.groups[0].name).isEqualTo(userDto.groups[0].name)
        assertThat(user.groups[0].description).isEqualTo(userDto.groups[0].description)
    }
}