package dev.vozniack.cas.core.api.v1.dto.operational

class DashboardStatisticsDto(
    val organizationsAmount: Long,
    val usersAmount: Long,
    val rolesAmount: Long,
    val privilegesAmount: Long
)