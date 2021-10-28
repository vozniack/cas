package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.entity.common.Auditable
import dev.vozniack.cas.core.types.ScopeType
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "roles")
class Role(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType = ScopeType.EXTERNAL,

    var name: String = "",
    var description: String = "",

    @ManyToMany
    @JoinTable(
        name = "role_privileges",
        joinColumns = [JoinColumn(name = "role_id")],
        inverseJoinColumns = [JoinColumn(name = "privilege_id")]
    )
    var privileges: List<Privilege> = listOf(),

    ) : Auditable()