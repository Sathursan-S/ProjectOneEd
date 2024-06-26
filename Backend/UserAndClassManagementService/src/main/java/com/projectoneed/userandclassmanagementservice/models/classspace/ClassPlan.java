package com.projectoneed.userandclassmanagementservice.models.classspace;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClassPlan {
    @Id
    private String classPlanId;
    private String instructorId;
    private String name;
    private String description;
    private double price;

    private String classId;
    private String productId;
    private String priceId;
}