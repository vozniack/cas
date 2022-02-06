package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.entity.common.Auditable
import dev.vozniack.cas.core.types.ScopeType
import java.util.UUID
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "users")
class User(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType? = ScopeType.EXTERNAL,

    var email: String = "",
    var password: String? = null,

    var firstName: String? = null,
    var lastName: String? = null,

    var active: Boolean? = true,

    @ManyToOne
    @JoinColumn(name = "organization_id")
    var organization: Organization? = null,

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