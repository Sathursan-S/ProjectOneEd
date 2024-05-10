package com.projectoneed.userandclassmanagementservice.dto.student;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAndUpdateStudentRequest {
    private String userId;
    private String firstName;
    private String email;
    private String lastName;
    private String phone;
}
