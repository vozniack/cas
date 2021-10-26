package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.api.v1.mapper.Mapper
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.service.PrivilegeService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/v1/privileges")
class PrivilegeController(
    private val privilegeService: PrivilegeService,
    private val privilegeMapper: Mapper<Privilege, PrivilegeDto>,
) {

    @GetMapping
    fun getAll(pageable: Pageable): Page<PrivilegeDto> = privilegeService.findAll(pageable).map(privilegeMapper::mapToDto)

    @GetMapping("/{id}")
    fun getById(@PathVariable id: UUID): PrivilegeDto = privilegeMapper.mapToDto(privilegeService.findById(id))

    @PostMapping
    fun create(@RequestBody privilegeDto: PrivilegeDto): PrivilegeDto =
        privilegeMapper.mapToDto(privilegeService.create(privilegeMapper.mapToEntity(privilegeDto)))

    @PutMapping("/{id}")
    fun update(@PathVariable id: UUID, @RequestBody privilegeDto: PrivilegeDto): PrivilegeDto =
        privilegeMapper.mapToDto(privilegeService.update(id, privilegeMapper.mapToEntity(privilegeDto)))

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: UUID) = privilegeService.delete(id)
}