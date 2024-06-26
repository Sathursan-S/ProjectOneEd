package com.projectoneed.authservice.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import com.projectoneed.authservice.dto.AuthenticationRequest;
import com.projectoneed.authservice.dto.AuthenticationResponse;
import com.projectoneed.authservice.service.AuthenticationService;
import com.projectoneed.authservice.dto.RegisterRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthenticationController {
    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@Valid @RequestBody RegisterRequest registerRequest) {
        try {
            return ResponseEntity.ok(authService.register(registerRequest));
        } catch (Exception e) {
            log.error("Failed to register user", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(AuthenticationResponse.builder().error(e.getMessage()).build());
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest authenticationRequest
    ) {
        try {
            AuthenticationResponse response = authService.authenticate(authenticationRequest);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Failed to authenticate user", e);
            return ResponseEntity.badRequest().body(AuthenticationResponse.builder().error(e.getMessage()).build());
        }
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        authService.refreshToken(request, response);
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id) {
        authService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserById(@PathVariable String id) {
        return ResponseEntity.ok(authService.getUserById(id));
    }
}
