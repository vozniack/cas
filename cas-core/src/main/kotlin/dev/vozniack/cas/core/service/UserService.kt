package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.api.v1.dto.request.UserEmailRequestDto
import dev.vozniack.cas.core.api.v1.dto.request.UserPasswordRequestDto
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.UserRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(private val userRepository: UserRepository, private val passwordEncoder: PasswordEncoder) {

    fun findAll(pageable: Pageable): Page<User> = userRepository.findAll(pageable)

    fun findById(id: UUID): User = userRepository.findById(id).orElseThrow { NotFoundException() }

    fun create(user: User): User = userRepository.save(user.apply { password = passwordEncoder.encode(user.password) })

    fun update(id: UUID, user: User): User = userRepository.save(
        findById(id).apply {
            firstName = user.firstName
            lastName = user.lastName
        }
    )

    fun updateEmail(id: UUID, request: UserEmailRequestDto): User = userRepository.save(
        findById(id).apply { email = request.email }
    )

    fun updatePassword(id: UUID, request: UserPasswordRequestDto): User = userRepository.save(
        findById(id).apply { password = passwordEncoder.encode(request.password) }
    )

    fun delete(id: UUID) = userRepository.delete(findById(id))
}