package dev.vozniack.cas.core.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "users")
class User(

    @Id @GeneratedValue
    var id: UUID? = null,

    var email: String = "",
    var password: String? = null,

    var firstName: String? = null,
    var lastName: String? = null,

    @ManyToMany
    @JoinTable(
        name = "user_groups",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "group_id")]
    )
    var groups: List<Group> = listOf(),

    @ManyToMany
    @JoinTable(
        name = "user_privileges",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "privilege_id")]
    )
    var privileges: List<Privilege> = listOf(),
)