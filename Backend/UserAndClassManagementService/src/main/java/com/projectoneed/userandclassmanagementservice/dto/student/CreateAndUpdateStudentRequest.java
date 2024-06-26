package com.projectoneed.userandclassmanagementservice.dto.student;

import ch.qos.logback.classic.spi.LoggingEventVO;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@Data
public class CreateAndUpdateStudentRequest {
    private String userId;
    private String firstName;
    private String email;
    private String lastName;
    private String phone;
}