package com.projectoneed.sharedlib.dto.payment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateClassPlanRequest {
    private String instructorId;
    private String stripeAccountId;
    private String classId;
    private String className;
    private String description;
    private double price;
}
