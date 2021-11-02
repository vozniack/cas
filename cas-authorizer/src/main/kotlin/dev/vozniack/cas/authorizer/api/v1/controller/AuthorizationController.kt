package dev.vozniack.cas.authorizer.api.v1.controller

import dev.vozniack.cas.authorizer.api.v1.dto.LoginRequest
import dev.vozniack.cas.authorizer.api.v1.dto.LoginResponse
import dev.vozniack.cas.authorizer.service.AuthorizationService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/v1/auth")
class AuthorizationController(private val authorizationService: AuthorizationService) {

    @PostMapping
    fun login(@RequestBody loginRequest: LoginRequest): LoginResponse =
        LoginResponse(token = authorizationService.login(loginRequest))
}