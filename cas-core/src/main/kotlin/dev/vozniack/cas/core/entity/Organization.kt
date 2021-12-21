package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.entity.common.Auditable
import dev.vozniack.cas.core.types.ScopeType
import java.util.UUID
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "organizations")
class Organization(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType = ScopeType.EXTERNAL,

    var name: String? = null,
    var code: String? = null,
    var description: String? = null,

    @OneToMany(mappedBy = "organization")
    var users: List<User> = listOf(),

    @OneToMany(mappedBy = "organization")
    var privileges: List<Privilege> = listOf(),

    ) : Auditable()