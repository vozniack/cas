package dev.vozniack.cas.authorizer.security

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter

@Configuration
@EnableWebSecurity
class WebSecurityConfiguration : WebSecurityConfigurerAdapter() {

    @Value("\${cas.security.jwt.secret}")
    lateinit var jwtSecret: String

    override fun configure(http: HttpSecurity) {
        http.cors().and()
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/auth").permitAll()
            .antMatchers("/api/internal/").authenticated()
            .and()
            .addFilterBefore(AuthenticationFilter(jwtSecret), BasicAuthenticationFilter::class.java)
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder = BCryptPasswordEncoder(BCryptPasswordEncoder.BCryptVersion.`$2Y`, 10)
}
