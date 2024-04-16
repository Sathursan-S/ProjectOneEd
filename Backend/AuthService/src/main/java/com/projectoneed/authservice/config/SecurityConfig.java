package com.projectoneed.authservice.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import static com.projectoneed.authservice.model.user.Permissions.*;
import static com.projectoneed.authservice.model.user.Role.INSTRUCTOR;
import static com.projectoneed.authservice.model.user.Role.STUDENT;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;
import static org.springframework.http.HttpMethod.DELETE;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtAuthFilter jwtAuthFilter;
    private final AuthenticationProvider authProvider;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(req -> req
                        .requestMatchers("api/v1/auth/**",
                                "/v2/api-docs",
                                "/v3/api-docs",
                                "/v3/api-docs/**",
                                "/swagger-resources",
                                "/swagger-resources/**",
                                "/configuration/ui",
                                "/configuration/security",
                                "/swagger-ui/**",
                                "/webjars/**",
                                "/swagger-ui.html")
                        .permitAll()

                        .requestMatchers("/api/v1/landig-page/**").hasAnyRole(STUDENT.name(), INSTRUCTOR.name())
                        .requestMatchers(GET,"api/v1/student/**").hasAuthority(STUDENT_READ.name())
                        .requestMatchers(POST,"api/v1/student/**").hasAuthority(STUDENT_WRITE.name())
                        .requestMatchers(PUT,"api/v1/student/**").hasAuthority(STUDENT_UPDATE.name())
                        .requestMatchers(DELETE,"api/v1/student/**").hasAuthority(STUDENT_DELETE.name())

                        .requestMatchers("api/v1/instructor/**").hasRole(INSTRUCTOR.name())
                        .requestMatchers(GET,"api/v1/instructor/**").hasAuthority(INSTRUCTOR_READ.name())
                        .requestMatchers(POST,"api/v1/instructor/**").hasAuthority(INSTRUCTOR_WRITE.name())
                        .requestMatchers(PUT,"api/v1/instructor/**").hasAuthority(INSTRUCTOR_UPDATE.name())
                        .requestMatchers(DELETE,"api/v1/instructor/**").hasAuthority(INSTRUCTOR_DELETE.name())
                        .anyRequest()
                        .authenticated()
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout ->
                        logout.logoutUrl("/api/v1/auth/logout")
                                .addLogoutHandler(logoutHandler)
                                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                );
        return http.build();
    }
}
