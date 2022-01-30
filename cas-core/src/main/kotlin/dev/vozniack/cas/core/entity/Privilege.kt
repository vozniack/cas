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
@Table(name = "privileges")
class Privilege(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType? = ScopeType.EXTERNAL,

    var name: String = "",
    var code: String = "",
    var description: String? = null,

    var index: Int? = null,

    @ManyToOne
    @JoinColumn(name = "organization_id")
    var organization: Organization? = null,

    @ManyToOne
    @JoinColumn(name = "parent_id")
    var parent: Privilege? = null,

    @OneToMany(mappedBy = "parent", cascade = [CascadeType.REMOVE])
    var privileges: List<Privilege>? = listOf(),

    ) : Auditable()