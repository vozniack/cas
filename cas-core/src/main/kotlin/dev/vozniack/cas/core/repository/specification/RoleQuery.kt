package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.jpa.domain.Specification

class RoleQuery(
    val scope: ScopeType? = null,
    val name: String? = null,
    val description: String? = null,
) : Specificable<Role> {

    private fun scopeEquals(scope: ScopeType?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            scope?.let { criteriaBuilder.equal(criteriaBuilder.upper(root.get("scope")), it) }
        }

    private fun nameLike(name: String?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            name?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%${it.lowercase()}%") }
        }

    private fun descriptionLike(description: String?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            description?.let {
                criteriaBuilder.like(criteriaBuilder.lower(root.get("description")),
                    "%${it.lowercase()}%")
            }
        }

    override fun toSpecification(): Specification<Role> =
        Specification<Role> { _, _, _ -> null }
            .and(scopeEquals(scope))
            .and(nameLike(name)
                .or(descriptionLike(description))
            )
}