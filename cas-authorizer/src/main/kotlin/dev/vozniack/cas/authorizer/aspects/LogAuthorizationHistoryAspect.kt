package dev.vozniack.cas.authorizer.aspects

import dev.vozniack.cas.authorizer.api.dto.login.LoginRequest
import dev.vozniack.cas.authorizer.entity.history.AuthorizationHistory
import dev.vozniack.cas.authorizer.repository.AuthorizationHistoryRepository
import dev.vozniack.cas.authorizer.types.AuthorizationHistoryStatus
import org.aspectj.lang.JoinPoint
import org.aspectj.lang.annotation.AfterReturning
import org.aspectj.lang.annotation.AfterThrowing
import org.aspectj.lang.annotation.Aspect
import org.aspectj.lang.annotation.Before
import org.springframework.stereotype.Component

@Aspect
@Component
class LogAuthorizationHistoryAspect(private val authorizationHistoryRepository: AuthorizationHistoryRepository) {

    @Before("@annotation(LogAuthorizationHistory)")
    fun loginAttempt(joinPoint: JoinPoint) {
        authorizationHistoryRepository.save(AuthorizationHistory(
            email = (joinPoint.args[0] as LoginRequest).email,
            status = AuthorizationHistoryStatus.ATTEMPT
        ))
    }

    @AfterReturning("@annotation(LogAuthorizationHistory)")
    fun loginSuccess(joinPoint: JoinPoint) {
        authorizationHistoryRepository.save(AuthorizationHistory(
            email = (joinPoint.args[0] as LoginRequest).email,
            status = AuthorizationHistoryStatus.SUCCESS
        ))
    }

    @AfterThrowing("@annotation(LogAuthorizationHistory)")
    fun loginFailure(joinPoint: JoinPoint) {
        authorizationHistoryRepository.save(AuthorizationHistory(
            email = (joinPoint.args[0] as LoginRequest).email,
            status = AuthorizationHistoryStatus.FAILURE
        ))
    }
}
