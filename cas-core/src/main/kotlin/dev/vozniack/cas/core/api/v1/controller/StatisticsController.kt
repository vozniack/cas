package dev.vozniack.cas.core.api.v1.controller

import dev.vozniack.cas.core.api.v1.dto.operational.DashboardStatisticsDto
import dev.vozniack.cas.core.service.StatisticsService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/v1/statistics")
class StatisticsController(private val statisticsService: StatisticsService) {

    @GetMapping("/dashboard")
    fun getDashboardStatistics(): DashboardStatisticsDto = statisticsService.getDashboardStatistics()
}