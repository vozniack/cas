package dev.vozniack.cas.core.api.v1.mapper

interface Mapper<Entity, Dto> {

    fun mapToDto(entity: Entity): Dto

    fun mapToEntity(dto: Dto): Entity
}