package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.RoleRepository
import dev.vozniack.cas.core.repository.UserRepository
import dev.vozniack.cas.core.repository.specification.RoleQuery
import java.util.UUID
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.server.ResponseStatusException

class RoleServiceTest @Autowired constructor(
    private val roleService: RoleService,
    private val roleRepository: RoleRepository,
    private val userRepository: UserRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        roleRepository.deleteAll()
        userRepository.deleteAll()
    }

    @Test
    fun `find page of all roles`() {
        roleRepository.saveAll(listOf(Role(name = "ADMINISTRATOR", description = "Description"),
            Role(name = "MANAGER", description = "Description"))
        )

        val roles = roleService.findAll(RoleQuery(), PageRequest.ofSize(1024))

        assertThat(roles).isInstanceOf(Page::class.java)
        assertThat(roles.content.size).isEqualTo(2)
    }

    @Test
    fun `find role by id`() {
        val savedRole = roleRepository.save(Role(name = "ROLE", description = "Description"))
        assertThat(savedRole.id).isNotNull

        val role = roleService.findById(savedRole.id!!)
        assertThat(role.id).isEqualTo(savedRole.id)
    }

    @Test
    fun `find role by not existing id`() {
        assertThatThrownBy { roleService.findById(UUID.randomUUID()) }
            .isInstanceOf(ResponseStatusException::class.java)
    }

    @Test
    @Transactional
    fun `find users belonging to role`() {
        val firstRole = roleRepository.save(Role(name = "FIRST_ROLE", description = "Description"))
        val secondRole = roleRepository.save(Role(name = "SECOND_ROLE", description = "Description"))
        val thirdRole = roleRepository.save(Role(name = "THIRD_ROLE", description = "Description"))

        userRepository.save(User(email = "john.doe1@cas.dev", roles = listOf(firstRole)))
        userRepository.save(User(email = "john.doe2@cas.dev", roles = listOf(firstRole, secondRole)))

        assertThat(roleService.findUsersByRoleId(firstRole.id!!).toList().size).isEqualTo(2)
        assertThat(roleService.findUsersByRoleId(secondRole.id!!).toList().size).isEqualTo(1)
        assertThat(roleService.findUsersByRoleId(thirdRole.id!!).toList().size).isEqualTo(0)
    }

    @Test
    fun `create new role`() {
        val role = roleService.create(Role(name = "ROLE", description = "Description"))

        assertThat(role).isNotNull
        assertThat(role.id).isNotNull
        assertThat(role.name).isEqualTo("ROLE")
        assertThat(role.description).isEqualTo("Description")
        assertThat(role.createdAt).isNotNull
        assertThat(role.updatedAt).isNotNull
        assertThat(role.createdAt).isEqualTo(role.updatedAt)
    }

    @Test
    fun `update role`() {
        val role = roleRepository.save(Role(name = "ROLE", description = "Description"))
        role.apply { name = "UPDATED_ROLE"; description = "Updated description" }

        val updatedRole = roleService.update(role.id!!, role)

        assertThat(updatedRole).isNotNull
        assertThat(updatedRole.id).isEqualTo(role.id)
        assertThat(updatedRole.name).isEqualTo("UPDATED_ROLE")
        assertThat(updatedRole.description).isEqualTo("Updated description")
        assertThat(updatedRole.createdAt).isBefore(updatedRole.updatedAt)
    }

    @Test
    fun `update not existing role`() {
        val role = roleRepository.save(Role(name = "ROLE", description = "Description"))
        role.apply { name = "UPDATED_ROLE"; description = "Updated description" }

        assertThatThrownBy { roleService.update(UUID.randomUUID(), role) }
            .isInstanceOf(ResponseStatusException::class.java)
    }

    @Test
    fun `delete role`() {
        val role = roleRepository.save(Role(name = "ROLE", description = "Description"))
        roleService.delete(role.id!!)

        assertThat(roleRepository.findById(role.id!!)).isEmpty
    }

    @Test
    fun `delete not existing role`() {
        assertThatThrownBy { roleService.delete(UUID.randomUUID()) }
            .isInstanceOf(ResponseStatusException::class.java)
    }
}