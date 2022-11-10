package dev.vozniack.cas.authorizer.entity.privilege

import dev.vozniack.cas.authorizer.entity.user.User
import java.util.UUID
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "user_privileges")
class UserPrivilege : RelatedPrivilege {

    @Id @GeneratedValue
    lateinit var id: UUID

    @ManyToOne
    @JoinColumn(name = "user_id")
    lateinit var user: User

    @ManyToOne
    @JoinColumn(name = "privilege_id")
    override lateinit var privilege: Privilege

    override var excluded: Boolean = false
}
