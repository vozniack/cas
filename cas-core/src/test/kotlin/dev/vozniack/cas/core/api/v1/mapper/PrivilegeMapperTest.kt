package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.PrivilegeRepository
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.util.UUID

class PrivilegeMapperTest @Autowired constructor(
    private val privilegeMapper: Mapper<Privilege, PrivilegeDto>,
    private val privilegeRepository: PrivilegeRepository,
    private val organizationRepository: OrganizationRepository
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        privilegeRepository.deleteAll()
        organizationRepository.deleteAll()
    }

    @Test
    fun `map entity to dto`() {
        // organization need to exist in repository due to matching by id

        val organization = organizationRepository.save(
            Organization(id = UUID.randomUUID(), name = "Organization", code = "ORG")
        )

        val privilege = Privilege(
            id = UUID.randomUUID(), scope = ScopeType.INTERNAL, name = "Privilege", code = "PRIVILEGE",
            description = "Privilege set", index = 0,
            organization = organization,
            parent = Privilege(id = UUID.randomUUID(),
                name = "Parent privilege", code = "PARENT_PRIVILEGE", description = "Parent privilege set"),
            privileges = listOf(
                Privilege(id = UUID.randomUUID(), name = "First privilege", code = "FIRST_PRIVILEGE",
                    organization = organization),
                Privilege(id = UUID.randomUUID(), name = "Second privilege", code = "SECOND_PRIVILEGE",
                    organization = organization)
            ))

        val privilegeDto = privilegeMapper.mapToDto(privilege)

        assertThat(privilegeDto.id).isEqualTo(privilege.id)
        assertThat(privilegeDto.scope).isEqualTo(privilege.scope)
        assertThat(privilegeDto.name).isEqualTo(privilege.name)
        assertThat(privilegeDto.code).isEqualTo(privilege.code)
        assertThat(privilegeDto.description).isEqualTo(privilege.description)
        assertThat(privilegeDto.index).isEqualTo(privilege.index)
        assertThat(privilegeDto.organizationId).isEqualTo(privilege.organization?.id)
        assertThat(privilegeDto.parentId).isEqualTo(privilege.parent?.id)
        assertThat(privilegeDto.privileges?.size).isEqualTo(privilege.privileges?.size)
        assertThat(privilegeDto.privileges?.get(0)?.name).isEqualTo(privilege.privileges?.get(0)?.name)
        assertThat(privilegeDto.privileges?.get(0)?.code).isEqualTo(privilege.privileges?.get(0)?.code)
    }

    @Test
    fun `map dto to entity`() {
        // organization need to exist in repository due to matching by id

        val organization = organizationRepository.save(
            Organization(id = UUID.randomUUID(), name = "Organization", code = "ORG")
        )

        // parent need to exist in repository due to matching by id

        val parentPrivilege = privilegeRepository.save(Privilege(name = "Parent privilege",
            code = "PARENT_PRIVILEGE", description = "Parent privilege set",
            organization = organization))

        val privilegeDto = PrivilegeDto(id = UUID.randomUUID(), scope = ScopeType.INTERNAL,
            name = "Privilege", code = "PRIVILEGE", description = "Privilege set", index = 0,
            organizationId = organization.id!!, parentId = parentPrivilege.id,
            privileges = listOf(
                PrivilegeDto(id = UUID.randomUUID(), scope = ScopeType.INTERNAL, name = "First privilege",
                    code = "FIRST_PRIVILEGE", description = null, index = 0, organizationId = organization.id!!,
                    parentId = null, privileges = null),
                PrivilegeDto(id = UUID.randomUUID(), scope = ScopeType.INTERNAL, name = "Second privilege",
                    code = "SECOND_PRIVILEGE", description = null, index = 1, organizationId = organization.id!!,
                    parentId = null, privileges = null)
            ))

        val privilege = privilegeMapper.mapToEntity(privilegeDto)

        assertThat(privilege.id).isEqualTo(privilegeDto.id)
        assertThat(privilege.scope).isEqualTo(privilegeDto.scope)
        assertThat(privilege.name).isEqualTo(privilegeDto.name)
        assertThat(privilege.code).isEqualTo(privilegeDto.code)
        assertThat(privilege.description).isEqualTo(privilegeDto.description)
        assertThat(privilege.index).isEqualTo(privilegeDto.index)
        assertThat(privilege.organization?.id).isEqualTo(privilegeDto.organizationId)
        assertThat(privilege.parent?.id).isEqualTo(privilegeDto.parentId)
        assertThat(privilege.privileges).isNull()
    }
}