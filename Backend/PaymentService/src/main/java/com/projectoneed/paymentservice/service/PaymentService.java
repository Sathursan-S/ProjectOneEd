package com.projectoneed.paymentservice.service;

import com.projectoneed.sharedlib.dto.PaymentResponse;

public interface PaymentService {
    PaymentResponse makePayment(String userId, String orderId, double amount);
}
