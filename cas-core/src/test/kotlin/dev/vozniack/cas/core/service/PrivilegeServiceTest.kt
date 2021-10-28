package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.exception.ConflictException
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.PrivilegeRepository
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.transaction.annotation.Transactional
import java.util.*

class PrivilegeServiceTest @Autowired constructor(
    private val privilegeService: PrivilegeService,
    private val privilegeRepository: PrivilegeRepository,
) : CasCoreAbstractTest() {

    @BeforeEach
    @AfterEach
    fun tearDown() = privilegeRepository.deleteAll()

    @Test
    @Transactional
    fun `find list of all privileges`() {
        val firstParent = privilegeRepository.save(Privilege(name = "First privilege", code = "FIRST_PRIVILEGE"))
        privilegeRepository.save(Privilege(name = "Second privilege", code = "SECOND_PRIVILEGE"))
        privilegeRepository.save(Privilege(name = "Third privilege", code = "THIRD_PRIVILEGE"))
        privilegeRepository.save(Privilege(name = "Child privilege", code = "CHILD_PRIVILEGE", parent = firstParent))

        val privileges = privilegeService.findAll(PageRequest.ofSize(1024))

        assertThat(privileges).isInstanceOf(Page::class.java)
        assertThat(privileges.content.size).isEqualTo(3) // only parents are visible
    }

    @Test
    fun `find privilege by id`() {
        val savedPrivilege = privilegeRepository.save(Privilege(name = "Privilege", code = "PRIVILEGE"))

        val privilege = privilegeService.findById(savedPrivilege.id!!)
        assertThat(privilege.id).isEqualTo(savedPrivilege.id)
    }

    @Test
    fun `find privilege by not existing id`() {
        assertThatThrownBy { privilegeService.findById(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `create new privilege`() {
        val parentPrivilege = privilegeRepository.save(Privilege(name = "Parent privilege",
            code = "PARENT_PRIVILEGE", description = "Parent privilege set"))

        val privilege = privilegeService.create(Privilege(name = "Privilege", scope = ScopeType.INTERNAL,
            code = "PRIVILEGE", description = "Privilege set", index = 0,
            parent = parentPrivilege, privileges = listOf(
                Privilege(name = "First privilege", code = "FIRST_PRIVILEGE"),
                Privilege(name = "Second privilege", code = "SECOND_PRIVILEGE")
            )))

        assertThat(privilege).isNotNull
        assertThat(privilege.id).isNotNull
        assertThat(privilege.scope).isEqualTo(ScopeType.INTERNAL)
        assertThat(privilege.name).isEqualTo("Privilege")
        assertThat(privilege.code).isEqualTo("PRIVILEGE")
        assertThat(privilege.description).isEqualTo("Privilege set")
        assertThat(privilege.index).isEqualTo(0)
        assertThat(privilege.parent?.id).isEqualTo(parentPrivilege.id)

        // children exist but not persisted (there is only CascadeType.REMOVE)

        assertThat(privilege.privileges?.size).isEqualTo(2)
        assertThat(privilege.privileges?.get(0)?.id).isNull()
        assertThat(privilege.privileges?.get(1)?.id).isNull()
    }

    @Test
    fun `update privilege`() {
        val parentPrivilege = privilegeRepository.save(Privilege(name = "Parent privilege",
            code = "PARENT_PRIVILEGE", description = "Parent privilege set"))

        val privilege = privilegeRepository.save(Privilege(scope = ScopeType.INTERNAL, name = "Privilege",
            code = "PRIVILEGE", description = "Privilege set", index = 0, parent = parentPrivilege))

        privilege.apply {
            scope = ScopeType.EXTERNAL; name = "Edited privilege"; code = "EDITED_PRIVILEGE"
            description = "Edited privilege set"; index = 1
        }

        val updatedPrivilege = privilegeService.update(privilege.id!!, privilege)

        assertThat(updatedPrivilege).isNotNull
        assertThat(updatedPrivilege.id).isEqualTo(privilege.id)
        assertThat(updatedPrivilege.scope).isEqualTo(ScopeType.INTERNAL)
        assertThat(updatedPrivilege.name).isEqualTo("Edited privilege")
        assertThat(updatedPrivilege.code).isEqualTo("EDITED_PRIVILEGE")
        assertThat(updatedPrivilege.description).isEqualTo("Edited privilege set")
        assertThat(updatedPrivilege.index).isEqualTo(1)
        assertThat(updatedPrivilege.parent?.id).isEqualTo(parentPrivilege.id)
    }

    @Test
    fun `update parent privilege`() {
        val parentPrivilege = privilegeRepository.save(Privilege(name = "Parent privilege",
            code = "PARENT_PRIVILEGE", description = "Parent privilege set"))

        val privilege = privilegeRepository.save(Privilege(name = "Privilege", code = "PRIVILEGE",
            description = "Privilege set", parent = null))

        assertThat(privilege).isNotNull
        assertThat(privilege.id).isNotNull
        assertThat(privilege.parent).isNull()

        privilege.apply { parent = parentPrivilege }

        val updatedPrivilege = privilegeService.update(privilege.id!!, privilege)

        assertThat(updatedPrivilege).isNotNull
        assertThat(updatedPrivilege.id).isEqualTo(privilege.id)
        assertThat(updatedPrivilege.parent?.id).isEqualTo(parentPrivilege.id)
    }

    @Test
    fun `update not existing privilege`() {
        assertThatThrownBy { privilegeService.update(UUID.randomUUID(), Privilege()) }
            .isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `delete privilege`() {
        val privilege = privilegeRepository.save(Privilege(scope = ScopeType.EXTERNAL, name = "Privilege",
            code = "PRIVILEGE", description = "Privilege set"))

        privilegeService.delete(privilege.id!!)
        assertThat(privilegeRepository.findById(privilege.id!!)).isEmpty
    }

    @Test
    fun `delete internal privilege`() {
        val privilege = privilegeRepository.save(Privilege(scope = ScopeType.INTERNAL, name = "Privilege",
            code = "PRIVILEGE", description = "Privilege set"))

        assertThatThrownBy { privilegeService.delete(privilege.id!!) }
            .isInstanceOf(ConflictException::class.java)
    }

    @Test
    fun `delete not existing privilege`() {
        assertThatThrownBy { privilegeService.delete(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }
}