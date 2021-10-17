package dev.vozniack.cas.core.entity

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table
import java.util.*

@Table("users")
data class User(

    @Id var id: UUID?,

    var email: String,
    var password: String,

    var firstName: String,
    var lastName: String,
)