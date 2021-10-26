package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.types.GroupType
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "groups")
class Group(

    @Id @GeneratedValue
    var id: UUID? = null,

    @Enumerated(EnumType.STRING)
    var type: GroupType = GroupType.EXTERNAL,

    var name: String = "",
    var description: String = "",
)