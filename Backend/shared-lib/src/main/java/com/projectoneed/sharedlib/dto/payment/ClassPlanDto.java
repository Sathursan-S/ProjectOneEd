package com.projectoneed.sharedlib.dto.payment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClassPlanDto {
    private String classPlanId;
    private String instructorId;
    private String name;
    private String description;
    private double price;

    private String classId;
    private String productId;
    private String priceId;
}