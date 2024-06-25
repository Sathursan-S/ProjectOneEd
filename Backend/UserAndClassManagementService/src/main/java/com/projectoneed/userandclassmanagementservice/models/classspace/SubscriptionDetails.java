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
public class SubscriptionDetails {
    @Id
    private String subscriptionId;
    private String studentId;
    private String classPlanId;
    private String classId;
    private SubscriptionStatus status;

    enum SubscriptionStatus {
        INCOMPLETE,
        INCOMPLETE_EXPIRED,
        TRIALING,
        ACTIVE,
        PAST_DUE,
        CANCELED,
        UNPAID,
        PAUSED
    }
}
