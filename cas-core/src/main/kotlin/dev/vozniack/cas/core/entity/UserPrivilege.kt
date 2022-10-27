package dev.vozniack.cas.core.entity

import dev.vozniack.cas.core.entity.common.Auditable
import java.util.UUID
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "user_privileges")
class UserPrivilege(

    @Id @GeneratedValue
    var id: UUID? = null,

    @ManyToOne
    @JoinColumn(name = "user_id")
    var user: User? = null,

    @ManyToOne
    @JoinColumn(name = "privilege_id")
    var privilege: Privilege? = null,

    var excluded: Boolean? = false,

    ) : Auditable()