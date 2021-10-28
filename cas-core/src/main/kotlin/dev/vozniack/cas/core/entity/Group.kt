package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.types.ScopeType
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "groups")
class Group(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType = ScopeType.EXTERNAL,

    var name: String = "",
    var description: String = "",

    @ManyToMany
    @JoinTable(
        name = "group_privileges",
        joinColumns = [JoinColumn(name = "group_id")],
        inverseJoinColumns = [JoinColumn(name = "privilege_id")]
    )
    var privileges: List<Privilege> = listOf(),
)