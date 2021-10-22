package dev.vozniack.cas.core.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "groups")
class Group(

    @Id @GeneratedValue
    var id: UUID? = null,

    var name: String = "",
    var description: String = "",
)