package com.projectoneed.userandclassmanagementservice.dto.student;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@Data
public class GetAllStudentsResponse {
    private String userId;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
    private String phoneNumber;
}
