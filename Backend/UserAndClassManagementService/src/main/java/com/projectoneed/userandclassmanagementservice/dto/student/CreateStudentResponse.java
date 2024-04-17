package com.projectoneed.userandclassmanagementservice.dto.student;

import lombok.Builder;
import lombok.RequiredArgsConstructor;

@Builder
public record CreateStudentResponse(
        String studentId,
        String studentName,
        String studentEmail,
        String studentPassword,
        String studentClassId) {

}