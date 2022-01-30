package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.api.v1.mapper.Mapper
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.repository.specification.OrganizationQuery
import dev.vozniack.cas.core.service.OrganizationService
import dev.vozniack.cas.core.types.ScopeType
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
import java.util.UUID

@RestController
@RequestMapping("api/v1/organizations")
class OrganizationController(
    private val organizationService: OrganizationService,
    private val organizationMapper: Mapper<Organization, OrganizationDto>,
) {

    @GetMapping
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(@RequestParam(required = false) search: String?, pageable: Pageable): Page<OrganizationDto> =
        organizationService.findAll(OrganizationQuery(ScopeType.EXTERNAL, search, search), pageable)
            .map(organizationMapper::mapToDto)

    @GetMapping("/internal")
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasRole('ADMIN')")
    fun getAllInternal(@RequestParam(required = false) search: String?, pageable: Pageable): Page<OrganizationDto> =
        organizationService.findAll(OrganizationQuery(ScopeType.INTERNAL, search, search), pageable)
            .map(organizationMapper::mapToDto)

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('READ_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun getById(@PathVariable id: UUID): OrganizationDto = organizationMapper.mapToDto(organizationService.findById(id))

    @PostMapping
    @PreAuthorize("hasAuthority('CREATE_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun create(@RequestBody organizationDto: OrganizationDto): OrganizationDto =
        organizationMapper.mapToDto(organizationService.create(organizationMapper.mapToEntity(organizationDto)))

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('UPDATE_ORGANIZATION') and hasAnyRole('ADMIN', 'USER')")
    fun update(@PathVariable id: UUID, @RequestBody organizationDto: OrganizationDto): OrganizationDto =
        organizationMapper.mapToDto(organizationService.update(id, organizationMapper.mapToEntity(organizationDto)))

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('DELETE_ORGANIZATION') and hasRole('ADMIN')")
    fun delete(@PathVariable id: UUID) = organizationService.delete(id)
}