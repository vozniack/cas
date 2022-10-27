package dev.vozniack.cas.authorizer.entity.user

import java.util.UUID
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "role_privileges")
class RolePrivilege(

    @Id @GeneratedValue
    var id: UUID? = null,

    @ManyToOne
    @JoinColumn(name = "role_id")
    var role: Role? = null,

    @ManyToOne
    @JoinColumn(name = "privilege_id")
    var privilege: Privilege? = null,

    var excluded: Boolean? = false,
)