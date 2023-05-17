package dev.vozniack.cas.authorizer.api.controller

import dev.vozniack.cas.authorizer.api.dto.login.LoginRequest
import dev.vozniack.cas.authorizer.api.dto.login.LoginResponse
import dev.vozniack.cas.authorizer.service.AuthorizationService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/auth")
class AuthorizationController(private val authorizationService: AuthorizationService) {

    @PostMapping
    fun login(@RequestBody loginRequest: LoginRequest): LoginResponse =
        LoginResponse(token = authorizationService.login(loginRequest))
}
