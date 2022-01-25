package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.types.ScopeType
import org.springframework.data.jpa.domain.Specification

class OrganizationQuery(
    val scope: ScopeType? = null,
    val name: String? = null,
    val code: String? = null,
) : Specificable<Organization> {

    private fun scopeEquals(scope: ScopeType?): Specification<Organization> =
        Specification<Organization> { root, _, criteriaBuilder ->
            scope?.let { criteriaBuilder.equal(criteriaBuilder.upper(root.get("scope")), it) }
        }

    private fun nameLike(name: String?): Specification<Organization> =
        Specification<Organization> { root, _, criteriaBuilder ->
            name?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%${it.lowercase()}%") }
        }

    private fun codeLike(code: String?): Specification<Organization> =
        Specification<Organization> { root, _, criteriaBuilder ->
            code?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("code")), "%${it.lowercase()}%") }
        }

    override fun toSpecification(): Specification<Organization> =
        Specification<Organization> { _, _, _ -> null }
            .and(scopeEquals(scope))
            .and(nameLike(name)
                .or(codeLike(code))
            )
}