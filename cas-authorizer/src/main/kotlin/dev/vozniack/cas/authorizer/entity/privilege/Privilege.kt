package dev.vozniack.cas.authorizer.entity.privilege

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
class Privilege {

    @Id @GeneratedValue
    lateinit var id: UUID

    lateinit var name: String
    lateinit var code: String

    @ManyToOne
    @JoinColumn(name = "parent_id")
    var parent: Privilege? = null

    @OneToMany(mappedBy = "parent", cascade = [CascadeType.REMOVE])
    var privileges: MutableList<Privilege> = mutableListOf()

    fun hasChildren(): Boolean = privileges.isNotEmpty()
}
