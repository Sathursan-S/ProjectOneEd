package com.projectoneed.authservice.dto;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserRequest {
    private String userId;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private int phone;
}
