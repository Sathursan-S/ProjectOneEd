package com.projectoneed.userandclassmanagementservice.dto.instructor;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Builder
@Getter
@Data
public class CreateAndUpdateInstructorRequest {
    private String userId;
    private String firstName;
    private String email;
    private String lastName;
    private String phone;
}
