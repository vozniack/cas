package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.entity.common.Auditable
import dev.vozniack.cas.core.types.ScopeType
import java.util.UUID
import javax.persistence.CascadeType
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "organizations")
class Organization(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType? = ScopeType.EXTERNAL,

    var name: String? = null,
    var code: String? = null,
    var description: String? = null,
    val icon: String? = null,

    var active: Boolean? = true,

    @ManyToOne
    @JoinColumn(name = "parent_id")
    var parent: Organization? = null,

    @OneToMany(mappedBy = "parent", cascade = [CascadeType.REMOVE])
    var organizations: List<Organization>? = listOf(),

    @OneToMany(mappedBy = "organization")
    var users: List<User> = listOf(),

    @OneToMany(mappedBy = "organization")
    var roles: List<Role> = listOf(),

    @OneToMany(mappedBy = "organization")
    var privileges: List<Privilege> = listOf(),

    ) : Auditable()