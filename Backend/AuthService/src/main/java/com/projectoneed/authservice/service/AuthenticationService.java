package com.projectoneed.authservice.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.projectoneed.authservice.dto.AuthenticationRequest;
import com.projectoneed.authservice.dto.AuthenticationResponce;
import com.projectoneed.authservice.dto.CreateUserRequest;
import com.projectoneed.authservice.dto.RegisterRequest;
import com.projectoneed.authservice.model.token.Token;
import com.projectoneed.authservice.model.token.TokenType;
import com.projectoneed.authservice.model.user.Role;
import com.projectoneed.authservice.repository.TokenRepository;
import com.projectoneed.authservice.repository.UserRepository;
import com.projectoneed.authservice.model.user.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;
    private final RestTemplate restTemplate;

    public AuthenticationResponce register(RegisterRequest registerRequest) {
        var user = User.builder()
                .username(registerRequest.getUsername())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(registerRequest.getRole())
                .build();
        var savedUser = userRepository.save(user);
        if(registerRequest.getRole().equals(Role.STUDENT)){
            try{
                createStudent(savedUser, registerRequest);
            }catch (Exception e){
                userRepository.delete(savedUser);
                throw new RuntimeException("Failed to create student");
            }
        }else if(registerRequest.getRole().equals(Role.INSTRUCTOR)){
            try {
                createInstructor(savedUser, registerRequest);
            }catch (Exception e){
                userRepository.delete(savedUser);
                throw new RuntimeException("Failed to create instructor");
            }
        }
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(savedUser,jwtToken);
        return AuthenticationResponce.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    public void createStudent(User user, RegisterRequest registerRequest){
        CreateUserRequest createUserRequest = CreateUserRequest.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .build();
        HttpEntity<CreateUserRequest> request = new HttpEntity<>(createUserRequest);
        ResponseEntity<CreateUserRequest> response = restTemplate.postForEntity(
                "http://UserAndClassManagementService/api/v1/student/create",
                request,
                CreateUserRequest.class
        );
    }

    public void createInstructor(User user, RegisterRequest registerRequest){
        CreateUserRequest createUserRequest = CreateUserRequest.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .build();
        HttpEntity<CreateUserRequest> request = new HttpEntity<>(createUserRequest);
        ResponseEntity<CreateUserRequest> response = restTemplate.postForEntity(
                "http://UserAndClassManagementService/api/v1/instructor/create",
                request,
                CreateUserRequest.class
        );
    }

    public AuthenticationResponce authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );

        var user = userRepository.findByUsername(authenticationRequest.getUsername()).orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponce.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String username;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        username = jwtService.extractUsername(refreshToken);
        if (username != null) {
            var user = this.userRepository.findByUsername(username)
                    .orElseThrow();
            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                var authResponse = AuthenticationResponce.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getUserId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }
}
