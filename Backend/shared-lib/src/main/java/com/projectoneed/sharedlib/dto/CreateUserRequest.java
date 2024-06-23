package com.projectoneed.sharedlib.dto;

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
    private String phone;
}
