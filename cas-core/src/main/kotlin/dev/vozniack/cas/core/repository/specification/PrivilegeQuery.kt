package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.jpa.domain.Specification

class PrivilegeQuery(
    val scope: ScopeType? = null,
    val name: String? = null,
    val code: String? = null,
    val description: String? = null,
) : Specificable<Privilege> {

    private fun scopeEquals(scope: ScopeType?): Specification<Privilege> =
        Specification<Privilege> { root, _, criteriaBuilder ->
            scope?.let { criteriaBuilder.equal(criteriaBuilder.upper(root.get("scope")), it) }
        }

    private fun nameLike(name: String?): Specification<Privilege> =
        Specification<Privilege> { root, _, criteriaBuilder ->
            name?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%${it.lowercase()}%") }
        }

    private fun codeLike(code: String?): Specification<Privilege> =
        Specification<Privilege> { root, _, criteriaBuilder ->
            code?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("code")), "%${it.lowercase()}%") }
        }

    private fun descriptionLike(description: String?): Specification<Privilege> =
        Specification<Privilege> { root, _, criteriaBuilder ->
            description?.let {
                criteriaBuilder.like(criteriaBuilder.lower(root.get("description")),
                    "%${it.lowercase()}%")
            }
        }

    override fun toSpecification(): Specification<Privilege> =
        Specification<Privilege> { _, _, _ -> null }
            .and(scopeEquals(scope))
            .and(nameLike(name)
                .or(codeLike(code))
                .or(descriptionLike(description))
            )
}