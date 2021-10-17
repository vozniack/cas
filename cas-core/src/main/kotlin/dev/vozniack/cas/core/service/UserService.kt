package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.UserRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class UserService(val userRepository: UserRepository) {

    fun findById(id: String): Mono<User> = userRepository.findById(id)

    fun findAll(): Flux<User> = userRepository.findAll()

    fun create(user: User): Mono<User> = userRepository.save(user)

    fun update(id: String, user: User): Mono<User> = findById(id)
        .map { oldUser -> oldUser.copy(firstName = user.firstName, lastName = user.lastName) }
        .flatMap(userRepository::save)

    fun updateEmail(id: String, email: String): Mono<User> = findById(id)
        .map { user -> user.copy(email = email) }
        .flatMap(userRepository::save)

    fun updatePassword(id: String, password: String): Mono<User> = findById(id)
        .map { user -> user.copy(password = password) }
        .flatMap(userRepository::save)

    fun delete(id: String) = userRepository.deleteById(id)
}