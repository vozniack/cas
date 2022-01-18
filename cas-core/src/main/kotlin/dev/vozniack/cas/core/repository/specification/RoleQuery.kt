package dev.vozniack.cas.core.repository.specification

import dev.vozniack.cas.core.entity.Role
import org.springframework.data.jpa.domain.Specification

class RoleQuery(
    val name: String? = null,
    val description: String? = null,
) : Specificable<Role> {

    private fun nameLike(name: String?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            name?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%${it.lowercase()}%") }
        }

    private fun descriptionLike(description: String?): Specification<Role> =
        Specification<Role> { root, _, criteriaBuilder ->
            description?.let { criteriaBuilder.like(criteriaBuilder.lower(root.get("description")), "%${it.lowercase()}%") }
        }

    override fun toSpecification(): Specification<Role> =
        Specification<Role> { _, _, _ -> null }
            .or(nameLike(name))
            .or(descriptionLike(description))
}