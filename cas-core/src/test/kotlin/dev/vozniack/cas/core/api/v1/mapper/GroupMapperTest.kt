package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.entity.GroupDto
import dev.vozniack.cas.core.entity.Group
import dev.vozniack.cas.core.types.GroupType
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.assertj.core.api.Assertions.assertThat
import java.util.*

class GroupMapperTest @Autowired constructor(
    private val groupMapper: Mapper<Group, GroupDto>,
) : CasCoreAbstractTest() {

    @Test
    fun `map entity to dto`() {
        val group = Group(id = UUID.randomUUID(), type = GroupType.EXTERNAL,
            name = "Group", description = "Description")
        val groupDto = groupMapper.mapToDto(group)

        assertThat(group.id).isEqualTo(groupDto.id)
        assertThat(group.type).isEqualTo(groupDto.type)
        assertThat(group.name).isEqualTo(groupDto.name)
        assertThat(group.description).isEqualTo(groupDto.description)
    }

    @Test
    fun `map dto to entity`() {
        val groupDto = GroupDto(id = UUID.randomUUID(), type = GroupType.EXTERNAL,
            name = "Group", description = "Description")
        val group = groupMapper.mapToEntity(groupDto)

        assertThat(groupDto.id).isEqualTo(group.id)
        assertThat(groupDto.type).isEqualTo(group.type)
        assertThat(groupDto.name).isEqualTo(group.name)
        assertThat(groupDto.description).isEqualTo(group.description)
    }
}