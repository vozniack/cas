package dev.vozniack.cas.authorizer.entity.user

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "roles")
class Role(

    @Id @GeneratedValue
    var id: UUID? = null,

    var name: String = "",
    var code: String = "",

    @ManyToMany
    @JoinTable(
        name = "role_privileges",
        joinColumns = [JoinColumn(name = "role_id")],
        inverseJoinColumns = [JoinColumn(name = "privilege_id")]
    )
    var privileges: List<Privilege> = listOf(),
)