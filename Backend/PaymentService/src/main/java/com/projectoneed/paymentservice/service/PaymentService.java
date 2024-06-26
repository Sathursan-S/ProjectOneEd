package com.projectoneed.paymentservice.service;

import com.projectoneed.sharedlib.dto.payment.*;
import com.stripe.exception.StripeException;
import org.springframework.stereotype.Service;

@Service
public interface PaymentService {
    ClassPlanDto createClassPlan(CreateClassPlanRequest createClassPlanRequest) throws StripeException;
    ClassPlanDto updateClassPlan(UpdateClassPlanRequest updateClassPlanRequest) throws StripeException;
    void deleteClassPlan(String classPlanId) throws StripeException;

    SubscriptionDetailsDto enrollClassPlan(EnrolClassPlanRequest enrolClassPlanRequest) throws StripeException;
    Object getSubscriptionDetails(String subscriptionId) throws StripeException;
    void cancelSubscription(String subscriptionId) throws StripeException;
}
