package dev.vozniack.cas.authorizer.repository

import dev.vozniack.cas.authorizer.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository : JpaRepository<User, UUID> {

    fun findUserByEmail(email: String): Optional<User>
}