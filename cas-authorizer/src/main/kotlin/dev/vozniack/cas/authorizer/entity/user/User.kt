package dev.vozniack.cas.authorizer.entity.user

import dev.vozniack.cas.authorizer.entity.privilege.UserPrivilege
import java.util.UUID
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "users")
class User(

    @Id @GeneratedValue
    var id: UUID? = null,

    var email: String = "",
    var password: String? = null,

    @ManyToMany
    @JoinTable(
        name = "user_roles",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "role_id")]
    )
    var roles: List<Role> = listOf(),

    @OneToMany(mappedBy = "user")
    var privileges: List<UserPrivilege> = listOf(),
)
