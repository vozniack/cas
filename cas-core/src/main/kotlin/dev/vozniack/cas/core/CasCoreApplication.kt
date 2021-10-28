package dev.vozniack.cas.core

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication
@EnableJpaAuditing
class CasCoreApplication

fun main(args: Array<String>) {
    runApplication<CasCoreApplication>(*args)
}
