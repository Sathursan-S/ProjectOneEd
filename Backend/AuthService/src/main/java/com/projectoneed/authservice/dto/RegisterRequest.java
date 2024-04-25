package com.projectoneed.authservice.dto;

import com.projectoneed.authservice.model.user.Role;
import lombok.*;

@Data
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private String password;
    private Role role;
}
