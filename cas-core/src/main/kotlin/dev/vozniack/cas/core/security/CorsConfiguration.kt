package dev.vozniack.cas.core.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
class CorsConfiguration {

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        return UrlBasedCorsConfigurationSource().apply {
            registerCorsConfiguration("/**", CorsConfiguration()
                .apply {
                    allowCredentials = true
                    allowedOrigins = listOf("*")
                    allowedHeaders = listOf("*")
                    exposedHeaders = listOf("Authorization")
                    allowedMethods = listOf("GET", "POST", "PUT", "PATCH", "DELETE")
                })
        }
    }
}