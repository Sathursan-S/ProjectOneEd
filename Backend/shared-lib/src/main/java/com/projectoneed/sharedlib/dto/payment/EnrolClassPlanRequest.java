package com.projectoneed.sharedlib.dto.payment;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EnrolClassPlanRequest {
    private String studentId;
    private String classPlanId;
    private String stripeCustomerId;

    private String studentName;
    private String studentEmail;
}
