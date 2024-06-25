package com.projectoneed.paymentservice.service;

import com.projectoneed.sharedlib.dto.PaymentResponse;
import com.projectoneed.sharedlib.dto.payment.*;
import com.stripe.Stripe;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StripePaymentService implements PaymentService{

    @Value("${stripe.secret.key}")
    private String secretKey;


    @Override
    public ClassPlan createClassPlan(CreateClassPlanRequest createClassPlanRequest) {
        return null;
    }

    @Override
    public ClassPlan updateClassPlan(UpdateClassPlanRequest updateClassPlanRequest) {
        return null;
    }

    @Override
    public void deleteClassPlan(String classPlanId) {

    }

    @Override
    public SubscriptionDetails enrollClassPlan(EnrolClassPlanRequest enrolClassPlanRequest) {
        return null;
    }

    @Override
    public SubscriptionDetails getSubscriptionDetails(String subscriptionId) {
        return null;
    }

    @Override
    public SubscriptionDetails getSubscriptionDetails(String studentId, String classPlanId) {
        return null;
    }

    @Override
    public SubscriptionDetails renewSubscription(String subscriptionId) {
        return null;
    }

    @Override
    public void cancelSubscription(String subscriptionId) {

    }
}
