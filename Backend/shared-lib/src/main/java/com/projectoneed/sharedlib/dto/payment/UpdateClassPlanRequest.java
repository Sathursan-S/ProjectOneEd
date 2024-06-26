package com.projectoneed.sharedlib.dto.payment;

import lombok.Data;

@Data
public class UpdateClassPlanRequest{
    private String classPlanId;
    private String instructorId;
    private String name;
    private String description;
    private double price;

    private String classId;
    private String productId;
    private String priceId;
}
