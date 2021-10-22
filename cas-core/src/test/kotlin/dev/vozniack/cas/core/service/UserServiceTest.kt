package dev.vozniack.cas.core.service

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.api.v1.dto.request.UserEmailRequestDto
import dev.vozniack.cas.core.api.v1.dto.request.UserPasswordRequestDto
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.exception.NotFoundException
import dev.vozniack.cas.core.repository.UserRepository
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import java.util.*

class UserServiceTest @Autowired constructor(
    private val userService: UserService,
    private val userRepository: UserRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        userRepository.deleteAll()
    }

    @Test
    fun `find list of all users`() {
        userRepository.save(User(email = "john.doe1@cas.dev", groups = listOf()))
        userRepository.save(User(email = "john.doe2@cas.dev", groups = listOf()))

        val users = userService.findAll()

        assertThat(users).isInstanceOf(List::class.java)
        assertThat(users.toList().size).isEqualTo(2)
    }

    @Test
    fun `find user by id`() {
        val savedUser = userRepository.save(User(email = "john.doe@cas.dev"))

        assertThat(savedUser.id).isNotNull

        val user = userService.findById(savedUser.id!!)
        assertThat(user.id).isEqualTo(savedUser.id)
    }

    @Test
    fun `find user by not existing id`() {
        assertThatThrownBy { userService.findById(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `create user`() {
        val user = userService.create(User(email = "john.doe@cas.dev", password = "pass123!",
            firstName = "John", lastName = "Doe"))

        assertThat(user).isNotNull
        assertThat(user.id).isNotNull
        assertThat(user.email).isEqualTo("john.doe@cas.dev")
        assertThat(user.password).isEqualTo("pass123!") // #todo after password encryption
        assertThat(user.firstName).isEqualTo("John")
        assertThat(user.lastName).isEqualTo("Doe")
    }

    @Test
    fun `update user personal data`() {
        val user = userRepository.save(User(email = "john.doe@cas.dev", password = "pass123!",
            firstName = "John", lastName = "Doe"))

        user.apply {
            firstName = "Updated John"; lastName = "Updated Doe"
            email = "updated.john.updated.doe@cas.dev"; password = "updatedPass123!"
        }

        val savedUser = userService.update(user.id!!, user)

        assertThat(savedUser.firstName).isEqualTo("Updated John")
        assertThat(savedUser.lastName).isEqualTo("Updated Doe")
        assertThat(savedUser.email).isEqualTo("john.doe@cas.dev")
        assertThat(savedUser.password).isEqualTo("pass123!") // #todo after password encryption
    }

    @Test
    fun `update not existing user personal data`() {
        val user = userRepository.save(User(email = "john.doe@cas.dev", password = "pass123!",
            firstName = "John", lastName = "Doe"))

        user.apply {
            firstName = "Updated John"; lastName = "Updated Doe"; email = "updatedjohn.updateddoe@cas.dev"
        }

        assertThatThrownBy { userService.update(UUID.randomUUID(), user) }
            .isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `update user email`() {
        val user = userRepository.save(User(email = "john.doe@cas.dev", password = "pass123!",
            firstName = "John", lastName = "Doe"))

        val savedUser = userService.updateEmail(user.id!!, UserEmailRequestDto(email = "updated.john.doe@cas.dev"))

        assertThat(savedUser.firstName).isEqualTo("John")
        assertThat(savedUser.lastName).isEqualTo("Doe")
        assertThat(savedUser.email).isEqualTo("updated.john.doe@cas.dev")
        assertThat(savedUser.password).isEqualTo("pass123!") // #todo after password encryption
    }

    @Test
    fun `update not existing user email`() {
        assertThatThrownBy {
            userService.updateEmail(UUID.randomUUID(), UserEmailRequestDto(email = "updated.john.doe@cas.dev"))
        }.isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `update user password`() {
        val user = userRepository.save(User(email = "john.doe@cas.dev", password = "pass123!",
            firstName = "John", lastName = "Doe"))

        val savedUser = userService.updatePassword(user.id!!, UserPasswordRequestDto(password = "updatedPass123!"))

        assertThat(savedUser.firstName).isEqualTo("John")
        assertThat(savedUser.lastName).isEqualTo("Doe")
        assertThat(savedUser.email).isEqualTo("john.doe@cas.dev")
        assertThat(savedUser.password).isEqualTo("updatedPass123!") // #todo after password encryption
    }

    @Test
    fun `update not existing user password`() {
        assertThatThrownBy {
            userService.updatePassword(UUID.randomUUID(), UserPasswordRequestDto(password = "updatedPass123!"))
        }.isInstanceOf(NotFoundException::class.java)
    }

    @Test
    fun `delete user`() {
        val user = userRepository.save(User(email = "john.doe@cas.dev", password = "pass123!",
            firstName = "John", lastName = "Doe"))

        userService.delete(user.id!!)

        assertThat(userRepository.findById(user.id!!)).isEmpty
    }

    @Test
    fun `delete not existing user`() {
        assertThatThrownBy { userService.delete(UUID.randomUUID()) }
            .isInstanceOf(NotFoundException::class.java)
    }
}