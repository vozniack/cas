package dev.vozniack.cas.authorizer.repository

import dev.vozniack.cas.authorizer.entity.user.User
import java.util.Optional
import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, UUID> {

    fun findUserByEmail(email: String): Optional<User>
}