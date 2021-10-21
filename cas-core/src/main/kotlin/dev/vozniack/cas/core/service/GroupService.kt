package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.entity.Group
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.GroupRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class GroupService(private val groupRepository: GroupRepository) {

    fun findAll(): MutableIterable<Group> = groupRepository.findAll()

    fun findById(id: UUID): Group = groupRepository.findById(id).orElseThrow { NotFoundException() }

    fun findUsers(id: UUID): List<User> = findById(id).users

    fun create(group: Group): Group = groupRepository.save(group)

    fun update(id: UUID, group: Group): Group = groupRepository.save(
        findById(id).apply { name = group.name; description = group.description }
    )

    fun delete(id: UUID) = groupRepository.delete(findById(id))
}