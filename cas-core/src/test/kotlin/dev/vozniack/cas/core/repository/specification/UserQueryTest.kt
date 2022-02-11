package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.CasCoreAbstractTest
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.repository.OrganizationRepository
import dev.vozniack.cas.core.repository.UserRepository
import dev.vozniack.cas.core.types.ScopeType
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired

class UserQueryTest @Autowired constructor(
    private val userRepository: UserRepository,
    private val organizationRepository: OrganizationRepository,
) : CasCoreAbstractTest() {

    @AfterEach
    fun tearDown() {
        userRepository.deleteAll()
        organizationRepository.deleteAll()
    }

    @Test
    fun `get users by query cases`() {
        val organization = organizationRepository.save(Organization(name = "First organization", code = "ORG_1"))

        userRepository.saveAll(listOf(
            User(firstName = "John", lastName = "Doe", email = "john.doe1@cas.dev", roles = listOf(),
                scope = ScopeType.INTERNAL, organization = organization),
            User(firstName = "Johannes", lastName = "Doe", email = "john.doe2@cas.dev", roles = listOf(),
                scope = ScopeType.EXTERNAL)
        ))

        var users = userRepository.findAll(UserQuery(scope = ScopeType.INTERNAL).toSpecification())
        Assertions.assertThat(users.size).isEqualTo(1)

        users = userRepository.findAll(UserQuery(lastName = "Doe").toSpecification())
        Assertions.assertThat(users.size).isEqualTo(2)

        users = userRepository.findAll(UserQuery(firstName = "Johannes").toSpecification())
        Assertions.assertThat(users.size).isEqualTo(1)

        users = userRepository.findAll(UserQuery(email = "doe2").toSpecification())
        Assertions.assertThat(users.size).isEqualTo(1)

        users = userRepository.findAll(UserQuery(organizationId = organization.id.toString()).toSpecification())
        Assertions.assertThat(users.size).isEqualTo(1)
    }
}