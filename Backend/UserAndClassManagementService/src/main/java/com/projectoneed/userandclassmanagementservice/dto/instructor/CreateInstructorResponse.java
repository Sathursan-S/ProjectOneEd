package com.projectoneed.userandclassmanagementservice.dto.instructor;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CreateInstructorResponse {
private String instructorId;
    private String instructorFirstName;
    private String instructorLastName;
    private String instructorEmail;
    private String instructorUsername;
    private int instructorPhoneNumber;
}
