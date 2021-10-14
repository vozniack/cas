package dev.vozniack.cas.core

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CasCoreApplication

fun main(args: Array<String>) {
	runApplication<CasCoreApplication>(*args)
}
