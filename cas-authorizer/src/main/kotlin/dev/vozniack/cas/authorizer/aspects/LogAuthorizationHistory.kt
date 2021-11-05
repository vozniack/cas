package dev.vozniack.cas.authorizer.aspects

/**
 * Aspect used for logging authorization history. Logs the login attempt and its result (success / failure) into elasticsearch.
 */
@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
annotation class LogAuthorizationHistory