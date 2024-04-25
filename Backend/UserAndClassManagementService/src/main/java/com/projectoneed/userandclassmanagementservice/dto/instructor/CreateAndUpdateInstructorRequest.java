package com.projectoneed.userandclassmanagementservice.dto.instructor;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CreateAndUpdateInstructorRequest {
    private String userId;
    private String firstName;
    private String email;
    private String lastName;
    private int phone;
}
