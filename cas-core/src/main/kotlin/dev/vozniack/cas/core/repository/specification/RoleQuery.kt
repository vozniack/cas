package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.jpa.domain.Specification
import java.util.UUID

class RoleQuery(
    val scope: ScopeType? = null,
    val name: String? = null,
    val code: String? = null,
    val description: String? = null,
    val organizationId: String? = null,
) : Specificable<Role> {

    private fun scopeEquals(scope: ScopeType?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            scope?.let { criteriaBuilder.equal(criteriaBuilder.upper(root.get("scope")), it) }
        }

    private fun nameLike(name: String?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            name?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%${it.lowercase()}%") }
        }

    private fun codeLike(code: String?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            code?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("code")), "%${it.lowercase()}%") }
        }

    private fun descriptionLike(description: String?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            description?.let {
                criteriaBuilder.like(criteriaBuilder.lower(root.get("description")),
                    "%${it.lowercase()}%")
            }
        }

    private fun belongsToOrganization(organizationId: String?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            organizationId?.let {
                criteriaBuilder.equal(root.get<Organization?>("organization").get<UUID?>("id"), UUID.fromString(it))
            }
        }

    override fun toSpecification(): Specification<Role> =
        Specification<Role> { _, _, _ -> null }
            .and(scopeEquals(scope))
            .and(belongsToOrganization(organizationId))
            .and(nameLike(name)
                .or(codeLike(code))
                .or(descriptionLike(description))
            )
}