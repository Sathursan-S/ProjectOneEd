package com.projectoneed.userandclassmanagementservice.dto;

import lombok.Data;

@Data
public class ManageJoinRequestDto {
    private String joinRequestId;
    private String instructorId;
    private boolean isAccepted;
}
