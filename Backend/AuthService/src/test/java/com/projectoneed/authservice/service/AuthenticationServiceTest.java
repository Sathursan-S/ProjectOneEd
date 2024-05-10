package com.projectoneed.authservice.service;

import com.projectoneed.authservice.dto.CreateUserRequest;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import com.projectoneed.authservice.dto.AuthenticationRequest;
import com.projectoneed.authservice.dto.AuthenticationResponse;
import com.projectoneed.authservice.dto.RegisterRequest;
import com.projectoneed.authservice.model.user.Role;
import com.projectoneed.authservice.model.user.User;
import com.projectoneed.authservice.repository.TokenRepository;
import com.projectoneed.authservice.repository.UserRepository;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthenticationServiceTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private JwtService jwtService;
    @Mock
    private AuthenticationManager authenticationManager;
    @Mock
    private TokenRepository tokenRepository;
    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private AuthenticationService authenticationService;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void register() {
        // Prepare inputs and mocks
        RegisterRequest registerRequest = RegisterRequest.builder()
                .username("username")
                .email("email")
                .password("password")
                .role(Role.STUDENT)
                .build();
        User user = User.builder()
                .userId("userId")
                .username("username")
                .email("email")
                .password("encodedPassword")
                .role(Role.STUDENT)
                .build();
        when(passwordEncoder.encode(registerRequest.getPassword())).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(user);
        when(jwtService.generateToken(user)).thenReturn("jwtToken");
        when(jwtService.generateRefreshToken(user)).thenReturn("refreshToken");

        // Action
        AuthenticationResponse response = authenticationService.register(registerRequest);

        // Asserts
        assertNotNull(response);
        assertEquals("jwtToken", response.getAccessToken());
        assertEquals("refreshToken", response.getRefreshToken());
        verify(userRepository, times(1)).save(any(User.class));
        verify(restTemplate, times(1)).postForEntity(anyString(), any(HttpEntity.class), eq(CreateUserRequest.class));
    }

    @Test
    void createStudent() {
        User user = User.builder()
                .userId("userId")
                .username("username")
                .email("email")
                .password("password")
                .role(Role.STUDENT)
                .build();
        RegisterRequest registerRequest = RegisterRequest.builder()
                .username("username")
                .email("email")
                .password("password")
                .role(Role.STUDENT)
                .firstName("John")
                .lastName("Doe")
                .build();

        authenticationService.createStudent(user, registerRequest);

        verify(restTemplate).postForEntity(
                eq("http://UserAndClassManagementService/api/v1/student/create"),
                any(HttpEntity.class),
                eq(CreateUserRequest.class)
        );
    }

    @Test
    void createInstructor() {
        User user = User.builder()
                .userId("userId")
                .username("username")
                .email("email")
                .password("password")
                .role(Role.INSTRUCTOR)
                .build();
        RegisterRequest registerRequest = RegisterRequest.builder()
                .username("username")
                .email("email")
                .password("password")
                .role(Role.INSTRUCTOR)
                .firstName("John")
                .lastName("Doe")
                .build();

        authenticationService.createInstructor(user, registerRequest);

        verify(restTemplate).postForEntity(
                eq("http://UserAndClassManagementService/api/v1/instructor/create"),
                any(HttpEntity.class),
                eq(CreateUserRequest.class)
        );
    }

    @Test
    void authenticate() {
        AuthenticationRequest request = new AuthenticationRequest("username", "password");
        User user = User.builder()
                .userId("userId")
                .username("username")
                .email("email")
                .password("password")
                .role(Role.STUDENT)
                .build();
        when(userRepository.findByUsername("username")).thenReturn(Optional.of(user));
        when(jwtService.generateToken(user)).thenReturn("jwtToken");
        when(jwtService.generateRefreshToken(user)).thenReturn("refreshToken");

        AuthenticationResponse response = authenticationService.authenticate(request);

        assertNotNull(response);
        assertEquals("jwtToken", response.getAccessToken());
        assertEquals("refreshToken", response.getRefreshToken());
        verify(authenticationManager).authenticate(any(UsernamePasswordAuthenticationToken.class));
    }

    @Test
    void refreshToken() {
        // Example assuming HttpServletRequest and HttpServletResponse are provided and mocked
        // Implementation details will vary based on actual methods and behaviors
    }

    @Test
    void getUserById() {
        String userId = "123";
        User user = User.builder()
                .userId(userId)
                .username("username")
                .email("email")
                .password("password")
                .role(Role.STUDENT)
                .build();
        when(userRepository.findByUserId(userId)).thenReturn(user);

        Object result = authenticationService.getUserById(userId);

        assertNotNull(result);
        assertTrue(result instanceof User);
        User resultUser = (User) result;
        assertEquals(userId, resultUser.getUserId());
        verify(userRepository).findByUserId(userId);
    }
}
