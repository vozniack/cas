package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.api.v1.dto.request.UserEmailRequestDto
import dev.vozniack.cas.core.api.v1.dto.request.UserPasswordRequestDto
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.UserRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(val userRepository: UserRepository) {

    fun findById(id: UUID): User = userRepository.findById(id).orElseThrow { NotFoundException() }

    fun findAll(): MutableIterable<User> = userRepository.findAll()

    fun create(user: User): User = userRepository.save(user)

    fun update(id: UUID, user: User): User = userRepository.save(
        findById(id).apply { firstName = user.firstName; lastName = user.lastName }
    )

    fun updateEmail(id: UUID, request: UserEmailRequestDto): User = userRepository.save(
        findById(id).apply { email = request.email }
    )

    fun updatePassword(id: UUID, request: UserPasswordRequestDto): User = userRepository.save(
        findById(id).apply { password = request.password }
    )

    fun delete(id: UUID) = userRepository.deleteById(id)
}