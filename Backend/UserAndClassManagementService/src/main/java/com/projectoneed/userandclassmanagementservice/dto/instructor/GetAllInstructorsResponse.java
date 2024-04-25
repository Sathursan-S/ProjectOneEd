package com.projectoneed.userandclassmanagementservice.dto.instructor;

import lombok.Builder;

@Builder
public class GetAllInstructorsResponse {
    private String userId;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
    private int phoneNumber;
}
