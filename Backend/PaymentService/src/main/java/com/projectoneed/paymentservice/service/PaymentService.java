package com.projectoneed.paymentservice.service;

import com.projectoneed.sharedlib.dto.payment.*;

public interface PaymentService {
    ClassPlan createClassPlan(CreateClassPlanRequest createClassPlanRequest);
    ClassPlan updateClassPlan(UpdateClassPlanRequest updateClassPlanRequest);
    void deleteClassPlan(String classPlanId);

    SubscriptionDetails enrollClassPlan(EnrolClassPlanRequest enrolClassPlanRequest);
    SubscriptionDetails getSubscriptionDetails(String subscriptionId);
    SubscriptionDetails getSubscriptionDetails(String studentId, String classPlanId);
    SubscriptionDetails renewSubscription(String subscriptionId);
    void cancelSubscription(String subscriptionId);
}
