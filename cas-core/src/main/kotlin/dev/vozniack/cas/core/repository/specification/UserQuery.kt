package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.jpa.domain.Specification
import java.util.UUID

class UserQuery(
    val scope: ScopeType? = null,
    val firstName: String? = null,
    val lastName: String? = null,
    val email: String? = null,
    val organizationId: String? = null,
) : Specificable<User> {

    private fun scopeEquals(scope: ScopeType?): Specification<User> =
        Specification<User> { root, _, criteriaBuilder ->
            scope?.let { criteriaBuilder.equal(criteriaBuilder.upper(root.get("scope")), it) }
        }

    private fun firstNameLike(firstName: String?): Specification<User> =
        Specification<User> { root, _, criteriaBuilder ->
            firstName?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("firstName")), "%${it.lowercase()}%") }
        }

    private fun lastNameLike(lastName: String?): Specification<User> =
        Specification<User> { root, _, criteriaBuilder ->
            lastName?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("lastName")), "%${it.lowercase()}%") }
        }

    private fun emailLike(email: String?): Specification<User> =
        Specification<User> { root, _, criteriaBuilder ->
            email?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("email")), "%${it.lowercase()}%") }
        }

    private fun belongsToOrganization(organizationId: String?): Specification<User> =
        Specification<User> { root, _, criteriaBuilder ->
            organizationId?.let {
                criteriaBuilder.equal(root.get<Organization?>("organization").get<UUID?>("id"), UUID.fromString(it))
            }
        }

    override fun toSpecification(): Specification<User> =
        Specification<User> { _, _, _ -> null }
            .and(scopeEquals(scope))
            .and(belongsToOrganization(organizationId))
            .and(firstNameLike(firstName)
                .or(lastNameLike(lastName))
                .or(emailLike(email))
            )
}