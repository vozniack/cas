package dev.vozniack.cas.authorizer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CasAuthorizerApplication

fun main(args: Array<String>) {
	runApplication<CasAuthorizerApplication>(*args)
}
