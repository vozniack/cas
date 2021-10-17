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

    fun update(id: String, user: User): Mono<User> {
        return findById(id).map { oldUser ->
            oldUser.apply {
                firstName = user.firstName
                lastName = user.lastName
            }
        }.flatMap(userRepository::save)
    }

    fun delete(id: String) = userRepository.deleteById(id)
}