package com.projectoneed.paymentservice.service;

import com.projectoneed.sharedlib.dto.PaymentResponse;

public class StripePaymentService implements PaymentService{
    @Override
    public PaymentResponse makePayment(String userId, String orderId, double amount) {
        return null;
    }
}
