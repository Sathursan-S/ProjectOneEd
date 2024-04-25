package com.projectoneed.userandclassmanagementservice.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class CreateUserRequest {
    private String userId;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private int phone;
}
