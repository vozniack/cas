package dev.vozniack.cas.core

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@EnableJpaAuditing
@SpringBootApplication(exclude = [UserDetailsServiceAutoConfiguration::class])
class CasCoreApplication

fun main(args: Array<String>) {
    runApplication<CasCoreApplication>(*args)
}
