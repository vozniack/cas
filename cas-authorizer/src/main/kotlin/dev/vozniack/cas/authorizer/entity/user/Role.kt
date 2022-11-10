package dev.vozniack.cas.authorizer.entity.user

import dev.vozniack.cas.authorizer.entity.privilege.RolePrivilege
import java.util.UUID
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "roles")
class Role(

    @Id @GeneratedValue
    var id: UUID? = null,

    var name: String = "",
    var code: String = "",

    @OneToMany(mappedBy = "role")
    var privileges: List<RolePrivilege> = listOf(),
)
