package com.projectoneed.userandclassmanagementservice.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DashboardResponse {
    private String userId;
    private String userFirstName;
    private String userLastName;
    private String userEmail;
}

