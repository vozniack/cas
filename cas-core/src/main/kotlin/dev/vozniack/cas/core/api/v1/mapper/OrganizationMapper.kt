package dev.vozniack.cas.core.api.v1.mapper

import dev.vozniack.cas.core.api.v1.dto.entity.OrganizationDto
import dev.vozniack.cas.core.api.v1.dto.entity.PrivilegeDto
import dev.vozniack.cas.core.api.v1.dto.entity.RoleDto
import dev.vozniack.cas.core.api.v1.dto.entity.UserDto
import dev.vozniack.cas.core.entity.Organization
import dev.vozniack.cas.core.entity.Privilege
import dev.vozniack.cas.core.entity.Role
import dev.vozniack.cas.core.entity.User
import dev.vozniack.cas.core.service.OrganizationService
import org.springframework.stereotype.Component

@Component
class OrganizationMapper(
    private val organizationService: OrganizationService,
    private val rolesMapper: Mapper<Role, RoleDto>,
    private val usersMapper: Mapper<User, UserDto>,
    private val privilegesMapper: Mapper<Privilege, PrivilegeDto>,
) : Mapper<Organization, OrganizationDto> {

    override fun mapToDto(entity: Organization): OrganizationDto = OrganizationDto(
        id = entity.id,
        scope = entity.scope,
        name = entity.name,
        code = entity.code,
        description = entity.description,
        icon = entity.icon,
        active = entity.active,
        parentId = entity.parent?.id,
        organizations = entity.organizations?.map { mapToDto(it) },
        roles = entity.roles.map { rolesMapper.mapToDto(it) },
        privileges = entity.privileges.map { privilegesMapper.mapToDto(it) },
        users = entity.users.map { usersMapper.mapToDto(it) },
        createdAt = entity.createdAt,
        updatedAt = entity.updatedAt,
    )

    override fun mapToEntity(dto: OrganizationDto): Organization = Organization(
        id = dto.id,
        scope = dto.scope,
        name = dto.name,
        code = dto.code,
        description = dto.description,
        icon = dto.icon,
        active = dto.active,
        parent = dto.parentId?.let { organizationService.findById(it) }
    )
}