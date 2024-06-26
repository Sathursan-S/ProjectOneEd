package com.projectoneed.sharedlib.dto.payment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionDetailsDto {
    private String subscriptionId;
    private String studentId;
    private String classPlanId;
    private String classId;
    private Object status;

}
