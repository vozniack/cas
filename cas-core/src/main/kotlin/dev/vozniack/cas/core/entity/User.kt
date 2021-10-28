package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.entity.common.Auditable
import dev.vozniack.cas.core.types.ScopeType
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "users")
class User(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType = ScopeType.EXTERNAL,

    var email: String = "",
    var password: String? = null,

    var firstName: String? = null,
    var lastName: String? = null,

    @ManyToMany
    @JoinTable(
        name = "user_roles",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "role_id")]
    )
    var roles: List<Role> = listOf(),

    @ManyToMany
    @JoinTable(
        name = "user_privileges",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "privilege_id")]
    )
    var privileges: List<Privilege> = listOf(),

    ) : Auditable()