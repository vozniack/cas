package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.api.v1.mapper.toDto
import dev.vozniack.cas.core.api.v1.mapper.toEntity
import dev.vozniack.cas.core.repository.specification.PrivilegeQuery
import dev.vozniack.cas.core.service.PrivilegeService
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
@RequestMapping("api/v1/privileges")
class PrivilegeController(
    private val privilegeService: PrivilegeService
) {

    @GetMapping("/page")
    @PreAuthorize("hasAuthority('READ_PRIVILEGE') and hasAnyRole('ADMIN', 'USER')")
    fun getAll(
        @RequestParam(required = false) search: String?,
        @RequestParam(required = false) organizationId: String?,
        pageable: Pageable,
    ): Page<PrivilegeDto> =
        privilegeService.findAll(PrivilegeQuery(ScopeType.EXTERNAL, search, search, search, organizationId), pageable)
            .map { it.toDto() }

    @GetMapping("/parents")
    @PreAuthorize("hasAuthority('READ_PRIVILEGE') and hasRole('ADMIN')")
    fun getAllParents(
        @RequestParam(required = false) search: String?,
        @RequestParam(required = false) organizationId: String?,
    ): List<PrivilegeDto> =
        privilegeService.findAllParents(PrivilegeQuery(ScopeType.EXTERNAL, search, search, search, organizationId))
            .map { it.toDto() }

    @GetMapping("/internal")
    @PreAuthorize("hasAuthority('READ_PRIVILEGE') and hasRole('ADMIN')")
    fun getAllInternal(@RequestParam(required = false) search: String?, pageable: Pageable): Page<PrivilegeDto> =
        privilegeService.findAll(PrivilegeQuery(ScopeType.INTERNAL, search, search, search), pageable)
            .map { it.toDto() }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('READ_PRIVILEGE') and hasAnyRole('ADMIN', 'USER')")
    fun getById(@PathVariable id: UUID): PrivilegeDto = privilegeService.findById(id).toDto()

    @PostMapping
    @PreAuthorize("hasAuthority('CREATE_PRIVILEGE') and hasAnyRole('ADMIN', 'USER')")
    fun create(@RequestBody privilegeDto: PrivilegeDto): PrivilegeDto =
        privilegeService.create(privilegeDto.toEntity()).toDto()

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('UPDATE_PRIVILEGE') and hasAnyRole('ADMIN', 'USER')")
    fun update(@PathVariable id: UUID, @RequestBody privilegeDto: PrivilegeDto): PrivilegeDto =
       privilegeService.update(id, privilegeDto.toEntity()).toDto()

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('DELETE_PRIVILEGE') and hasRole('ADMIN')")
    fun delete(@PathVariable id: UUID) = privilegeService.delete(id)
}