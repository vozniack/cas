package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.entity.Organization
import org.springframework.data.jpa.domain.Specification

class OrganizationQuery(
    val name: String? = null,
    val code: String? = null,
) : Specificable<Organization> {

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
            .or(nameLike(name))
            .or(codeLike(code))
}