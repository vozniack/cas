package dev.vozniack.cas.core.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "privileges")
class Privilege(

    @Id @GeneratedValue
    var id: UUID? = null,

    var name: String = "",
    var code: String = "",
    var description: String? = null,

    @ManyToOne
    @JoinColumn(name = "parent_id")
    var parent: Privilege? = null,

    @OneToMany(mappedBy = "parent", cascade = [CascadeType.REMOVE])
    var privileges: List<Privilege>? = listOf(),
)