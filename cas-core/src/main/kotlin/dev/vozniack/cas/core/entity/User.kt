package dev.vozniack.cas.core.entity

import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "users")
class User(

    @Id @GeneratedValue var id: UUID? = null,

    var email: String = "",
    var password: String = "",

    var firstName: String = "",
    var lastName: String = "",
)