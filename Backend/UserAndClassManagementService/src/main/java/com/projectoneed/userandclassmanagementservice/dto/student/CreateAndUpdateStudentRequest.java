package com.projectoneed.userandclassmanagementservice.dto.student;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAndUpdateStudentRequest {
    private String studentId;
    private String studentFirstName;
    private String studentEmail;
    private String studentLastName;
    private int phoneNumber;
}
