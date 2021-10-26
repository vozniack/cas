package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.PrivilegeRepository
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.util.*

class PrivilegeServiceTest @Autowired constructor(
    private val privilegeService: PrivilegeService,
    private val privilegeRepository: PrivilegeRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        privilegeRepository.deleteAll()
    }

    @Test
    fun `find list of all privileges`() {
        privilegeRepository.saveAll(listOf(
            Privilege(name = "First privilege", code = "FIRST_PRIVILEGE"),
            Privilege(name = "Second privilege", code = "SECOND_PRIVILEGE")
        ))

        val privileges = privilegeService.findAll()

        assertThat(privileges).isInstanceOf(List::class.java)
        assertThat(privileges.toList().size).isEqualTo(2)
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

        val privilege = privilegeRepository.save(Privilege(name = "Privilege", code = "PRIVILEGE",
            description = "Privilege set", parent = parentPrivilege, privileges = listOf(
                Privilege(name = "First privilege", code = "FIRST_PRIVILEGE"),
                Privilege(name = "Second privilege", code = "SECOND_PRIVILEGE")
            )))

        assertThat(privilege).isNotNull
        assertThat(privilege.id).isNotNull
        assertThat(privilege.name).isEqualTo("Privilege")
        assertThat(privilege.code).isEqualTo("PRIVILEGE")
        assertThat(privilege.description).isEqualTo("Privilege set")
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

        val privilege = privilegeRepository.save(Privilege(name = "Privilege", code = "PRIVILEGE",
            description = "Privilege set", parent = parentPrivilege))

        privilege.apply { name = "Edited privilege"; code = "EDITED_PRIVILEGE"; description = "Edited privilege set" }

        val updatedPrivilege = privilegeService.update(privilege.id!!, privilege)

        assertThat(updatedPrivilege).isNotNull
        assertThat(updatedPrivilege.id).isEqualTo(privilege.id)
        assertThat(updatedPrivilege.name).isEqualTo("Edited privilege")
        assertThat(updatedPrivilege.code).isEqualTo("EDITED_PRIVILEGE")
        assertThat(updatedPrivilege.description).isEqualTo("Edited privilege set")
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
        val privilege = privilegeRepository.save(Privilege(name = "Privilege", code = "PRIVILEGE",
            description = "Privilege set"))

        privilegeService.delete(privilege.id!!)
        assertThat(privilegeRepository.findById(privilege.id!!)).isEmpty
    }

    @Test
    fun `delete not existing privilege`() {
        assertThatThrownBy { privilegeService.delete(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }
}