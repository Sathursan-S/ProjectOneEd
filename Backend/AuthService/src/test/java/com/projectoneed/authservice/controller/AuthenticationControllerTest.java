package com.projectoneed.authservice.controller;

import com.projectoneed.authservice.dto.AuthenticationRequest;
import com.projectoneed.authservice.dto.AuthenticationResponse;
import com.projectoneed.authservice.dto.RegisterRequest;
import com.projectoneed.authservice.model.user.Role;
import com.projectoneed.authservice.service.AuthenticationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class AuthenticationControllerTest {

    @Mock
    private AuthenticationService authService;

    @InjectMocks
    private AuthenticationController authenticationController;

    @BeforeEach
    void setUp() {
    }

    @Test
    void register() {
        RegisterRequest registerRequest = RegisterRequest.builder()
                .username("username")
                .email("email")
                .password("password")
                .role(Role.valueOf("STUDENT"))
                .firstName("John")
                .lastName("Doe")
                .build();
        AuthenticationResponse expectedResponse = AuthenticationResponse.builder()
                .accessToken("accessToken")
                .refreshToken("refreshToken")
                .build();
        when(authService.register(registerRequest)).thenReturn(expectedResponse);

        ResponseEntity<AuthenticationResponse> response = authenticationController.register(registerRequest);

        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedResponse, response.getBody());
        verify(authService, times(1)).register(registerRequest);
    }

    @Test
    void authenticate() {
        AuthenticationRequest authRequest = AuthenticationRequest.builder()
                .username("username")
                .password("password")
                .build();
        AuthenticationResponse expectedResponse = AuthenticationResponse.builder()
                .accessToken("accessToken")
                .refreshToken("refreshToken")
                .build();
        when(authService.authenticate(authRequest)).thenReturn(expectedResponse);

        ResponseEntity<AuthenticationResponse> response = authenticationController.authenticate(authRequest);

        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedResponse, response.getBody());
        verify(authService, times(1)).authenticate(authRequest);
    }

    @Test
    void refreshToken() throws IOException {
        HttpServletRequest mockRequest = mock(HttpServletRequest.class);
        HttpServletResponse mockResponse = mock(HttpServletResponse.class);

        authenticationController.refreshToken(mockRequest, mockResponse);

        verify(authService).refreshToken(mockRequest, mockResponse);
    }

    @Test
    void getUserById() {
        String id = "userId";
        when(authService.getUserById(id)).thenReturn("user");

        ResponseEntity<?> response = authenticationController.getUserById(id);

        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("user", response.getBody());
        verify(authService, times(1)).getUserById(id);
    }
}
