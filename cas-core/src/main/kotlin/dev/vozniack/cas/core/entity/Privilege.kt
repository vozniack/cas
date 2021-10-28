package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.entity.common.Auditable
import dev.vozniack.cas.core.types.ScopeType
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "privileges")
class Privilege(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var scope: ScopeType = ScopeType.EXTERNAL,

    var name: String = "",
    var code: String = "",
    var description: String? = null,

    var index: Int? = null,

    @ManyToOne
    @JoinColumn(name = "parent_id")
    var parent: Privilege? = null,

    @OneToMany(mappedBy = "parent", cascade = [CascadeType.REMOVE])
    var privileges: List<Privilege>? = listOf(),

    ) : Auditable()