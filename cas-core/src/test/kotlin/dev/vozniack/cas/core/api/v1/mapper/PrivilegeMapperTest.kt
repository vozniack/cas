package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.repository.PrivilegeRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import java.util.*

class PrivilegeMapperTest @Autowired constructor(
    private val privilegeMapper: Mapper<Privilege, PrivilegeDto>,
    private val privilegeRepository: PrivilegeRepository,
) : CasCoreAbstractTest() {

    @Test
    fun `map entity to dto`() {
        val privilege = Privilege(
            id = UUID.randomUUID(), name = "Privilege", code = "PRIVILEGE", description = "Privilege set",
            parent = Privilege(id = UUID.randomUUID(),
                name = "Parent privilege", code = "PARENT_PRIVILEGE", description = "Parent privilege set"),
            privileges = listOf(
                Privilege(id = UUID.randomUUID(), name = "First privilege", code = "FIRST_PRIVILEGE"),
                Privilege(id = UUID.randomUUID(), name = "Second privilege", code = "SECOND_PRIVILEGE")
            ))

        val privilegeDto = privilegeMapper.mapToDto(privilege)

        assertThat(privilegeDto.id).isEqualTo(privilege.id)
        assertThat(privilegeDto.name).isEqualTo(privilege.name)
        assertThat(privilegeDto.code).isEqualTo(privilege.code)
        assertThat(privilegeDto.description).isEqualTo(privilege.description)
        assertThat(privilegeDto.parentId).isEqualTo(privilege.parent?.id)
        assertThat(privilegeDto.privileges?.size).isEqualTo(privilege.privileges?.size)
        assertThat(privilegeDto.privileges?.get(0)?.name).isEqualTo(privilege.privileges?.get(0)?.name)
        assertThat(privilegeDto.privileges?.get(0)?.code).isEqualTo(privilege.privileges?.get(0)?.code)
    }

    @Test
    fun `map dto to entity`() {
        // parent need to exist in repository due to matching by id

        val parentPrivilege = privilegeRepository.save(Privilege(name = "Parent privilege",
            code = "PARENT_PRIVILEGE", description = "Parent privilege set"))

        val privilegeDto = PrivilegeDto(id = UUID.randomUUID(), name = "Privilege", code = "PRIVILEGE",
            description = "Privilege set", parentId = parentPrivilege.id,
            privileges = listOf(
                PrivilegeDto(id = UUID.randomUUID(), name = "First privilege", code = "FIRST_PRIVILEGE",
                    description = null, parentId = null, privileges = null),
                PrivilegeDto(id = UUID.randomUUID(), name = "Second privilege", code = "SECOND_PRIVILEGE",
                    description = null, parentId = null, privileges = null)
            ))

        val privilege = privilegeMapper.mapToEntity(privilegeDto)

        assertThat(privilege.id).isEqualTo(privilegeDto.id)
        assertThat(privilege.name).isEqualTo(privilegeDto.name)
        assertThat(privilege.code).isEqualTo(privilegeDto.code)
        assertThat(privilege.description).isEqualTo(privilegeDto.description)
        assertThat(privilege.parent?.id).isEqualTo(privilegeDto.parentId)
        assertThat(privilege.privileges).isNull()
    }
}