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
@Table(name = "roles")
class Role(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType? = ScopeType.EXTERNAL,

    var name: String = "",
    var code: String = "",
    var description: String = "",

    @ManyToOne
    @JoinColumn(name = "organization_id")
    var organization: Organization? = null,

    @OneToMany(mappedBy = "role", cascade = [CascadeType.REMOVE])
    var privileges: List<RolePrivilege> = listOf(),

    ) : Auditable()