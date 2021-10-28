package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Group
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.GroupRepository
import dev.vozniack.cas.core.repository.UserRepository
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.transaction.annotation.Transactional
import java.util.*

class GroupServiceTest @Autowired constructor(
    private val groupService: GroupService,
    private val groupRepository: GroupRepository,
    private val userRepository: UserRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        groupRepository.deleteAll()
        userRepository.deleteAll()
    }

    @Test
    fun `find list of all groups`() {
        groupRepository.saveAll(listOf(Group(name = "First group", description = "Description"),
            Group(name = "Second group", description = "Description"))
        )

        val groups = groupService.findAll(PageRequest.ofSize(1024))

        assertThat(groups).isInstanceOf(Page::class.java)
        assertThat(groups.content.size).isEqualTo(2)
    }

    @Test
    fun `find group by id`() {
        val savedGroup = groupRepository.save(Group(name = "Group", description = "Description"))
        assertThat(savedGroup.id).isNotNull

        val group = groupService.findById(savedGroup.id!!)
        assertThat(group.id).isEqualTo(savedGroup.id)
    }

    @Test
    fun `find group by not existing id`() {
        assertThatThrownBy { groupService.findById(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }

    @Test
    @Transactional
    fun `find users belonging to group`() {
        val firstGroup = groupRepository.save(Group(name = "First group", description = "Description"))
        val secondGroup = groupRepository.save(Group(name = "Second group", description = "Description"))
        val thirdGroup = groupRepository.save(Group(name = "Third group", description = "Description"))

        userRepository.save(User(email = "john.doe1@cas.dev", groups = listOf(firstGroup)))
        userRepository.save(User(email = "john.doe2@cas.dev", groups = listOf(firstGroup, secondGroup)))

        assertThat(groupService.findUsers(firstGroup.id!!).toList().size).isEqualTo(2)
        assertThat(groupService.findUsers(secondGroup.id!!).toList().size).isEqualTo(1)
        assertThat(groupService.findUsers(thirdGroup.id!!).toList().size).isEqualTo(0)
    }

    @Test
    fun `create new group`() {
        val group = groupService.create(Group(name = "Group", description = "Description"))

        assertThat(group).isNotNull
        assertThat(group.id).isNotNull
        assertThat(group.name).isEqualTo("Group")
        assertThat(group.description).isEqualTo("Description")
        assertThat(group.createdAt).isNotNull
        assertThat(group.updatedAt).isNotNull
        assertThat(group.createdAt).isEqualTo(group.updatedAt)
    }

    @Test
    fun `update group`() {
        val group = groupRepository.save(Group(name = "Group", description = "Description"))
        group.apply { name = "Updated group"; description = "Updated description" }

        val updatedGroup = groupService.update(group.id!!, group)

        assertThat(updatedGroup).isNotNull
        assertThat(updatedGroup.id).isEqualTo(group.id)
        assertThat(updatedGroup.name).isEqualTo("Updated group")
        assertThat(updatedGroup.description).isEqualTo("Updated description")
        assertThat(updatedGroup.createdAt).isBefore(updatedGroup.updatedAt)
    }

    @Test
    fun `update not existing group`() {
        val group = groupRepository.save(Group(name = "Group", description = "Description"))
        group.apply { name = "Updated group"; description = "Updated description" }

        assertThatThrownBy { groupService.update(UUID.randomUUID(), group) }
            .isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `delete group`() {
        val group = groupRepository.save(Group(name = "Group", description = "Description"))
        groupService.delete(group.id!!)

        assertThat(groupRepository.findById(group.id!!)).isEmpty
    }

    @Test
    fun `delete not existing group`() {
        assertThatThrownBy { groupService.delete(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }
}