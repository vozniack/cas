package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.api.v1.mapper.toDto
import dev.vozniack.cas.core.api.v1.mapper.toEntity
import dev.vozniack.cas.core.repository.specification.OrganizationQuery
import dev.vozniack.cas.core.service.OrganizationService
import dev.vozniack.cas.core.types.ScopeType
import java.util.UUID
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/v1/organizations")
class OrganizationController(
    private val organizationService: OrganizationService
) {

    @GetMapping("/page")
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(@RequestParam(required = false) search: String?, pageable: Pageable): Page<OrganizationDto> =
        organizationService.findAll(OrganizationQuery(ScopeType.EXTERNAL, search, search), pageable)
            .map { it.toDto() }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(@RequestParam(required = false) search: String?): List<OrganizationDto> =
        organizationService.findAll(OrganizationQuery(ScopeType.EXTERNAL, search, search))
            .map { it.toDto() }

    @GetMapping("/parents")
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun getAllParents(@RequestParam(required = false) search: String?): List<OrganizationDto> =
        organizationService.findAllParents(OrganizationQuery(ScopeType.EXTERNAL, search, search))
            .map { it.toDto() }

    @GetMapping("/internal")
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasRole('ADMIN')")
    fun getInternal(): OrganizationDto = organizationService.findInternal().toDto()

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun getById(@PathVariable id: UUID): OrganizationDto = organizationService.findById(id).toDto()

    @PostMapping
    @PreAuthorize("hasAuthority('CREATE_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun create(@RequestBody organizationDto: OrganizationDto): OrganizationDto =
        organizationService.create(organizationDto.toEntity()).toDto()

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('UPDATE_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun update(@PathVariable id: UUID, @RequestBody organizationDto: OrganizationDto): OrganizationDto =
        organizationService.update(id, organizationDto.toEntity()).toDto()

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('DELETE_ORGANIZATION') and hasRole('ADMIN')")
    fun delete(@PathVariable id: UUID) = organizationService.delete(id)
}