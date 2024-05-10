package com.projectoneed.authservice.controller;

import com.projectoneed.authservice.service.LogoutService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import com.projectoneed.authservice.dto.AuthenticationRequest;
import com.projectoneed.authservice.dto.AuthenticationResponce;
import com.projectoneed.authservice.service.AuthenticationService;
import com.projectoneed.authservice.dto.RegisterRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthenticationController {
    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponce> register(
            @RequestBody RegisterRequest registerRequest
    ) {
        return ResponseEntity.ok(authService.register(registerRequest));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponce> authenticate(
            @RequestBody AuthenticationRequest authenticationRequest
    ) {
        try {
            AuthenticationResponce response = authService.authenticate(authenticationRequest);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Failed to authenticate user", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        authService.refreshToken(request, response);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserById(@PathVariable String id) {
        return ResponseEntity.ok(authService.getUserById(id));
    }
}
