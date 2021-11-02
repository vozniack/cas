package dev.vozniack.cas.authorizer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = [UserDetailsServiceAutoConfiguration::class])
class CasAuthorizerApplication

fun main(args: Array<String>) {
    runApplication<CasAuthorizerApplication>(*args)
}
