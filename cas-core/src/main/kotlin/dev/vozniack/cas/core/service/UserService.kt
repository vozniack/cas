package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.api.dto.request.UserEmailRequestDto
import dev.vozniack.cas.core.api.dto.request.UserPasswordRequestDto
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.UserRepository
import dev.vozniack.cas.core.repository.specification.Specificable
import io.github.oshai.KLogging
import java.util.UUID
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.HttpStatus
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

@Service
class UserService(private val userRepository: UserRepository, private val passwordEncoder: PasswordEncoder) {

    fun findAll(query: Specificable<User>, pageable: Pageable): Page<User> =
        userRepository.findAll(query.toSpecification(), pageable)

    fun findAll(query: Specificable<User>): List<User> =
        userRepository.findAll(query.toSpecification())

    fun findById(id: UUID): User = userRepository.findById(id)
        .orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND, "Not found user with id $id") }

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

    fun delete(id: UUID) {
        logger.debug { "Deleting user with id $id" }

        userRepository.delete(findById(id))
    }

    companion object : KLogging()
}