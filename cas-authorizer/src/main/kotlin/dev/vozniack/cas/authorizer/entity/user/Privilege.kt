package dev.vozniack.cas.authorizer.entity.user

import java.util.UUID
import javax.persistence.CascadeType
import javax.persistence.Entity
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

    var name: String = "",
    var code: String = "",

    var index: Int? = null,

    @ManyToOne
    @JoinColumn(name = "parent_id")
    var parent: Privilege? = null,

    @OneToMany(mappedBy = "parent", cascade = [CascadeType.REMOVE])
    var privileges: List<Privilege>? = listOf(),
)