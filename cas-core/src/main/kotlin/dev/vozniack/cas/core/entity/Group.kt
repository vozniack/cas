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

    @ManyToMany
    @JoinTable(
        name = "user_groups",
        joinColumns = [JoinColumn(name = "group_id")],
        inverseJoinColumns = [JoinColumn(name = "user_id")]
    )
    var users: List<User> = listOf(),
)