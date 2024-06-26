package com.projectoneed.paymentservice.controller;

import com.projectoneed.paymentservice.service.PaymentService;
import com.projectoneed.sharedlib.dto.payment.*;
import com.stripe.exception.StripeException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/payment")
public class PaymentController {
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/class-plan")
    public ResponseEntity<ClassPlanDto> createClassPlan(@RequestBody CreateClassPlanRequest createClassPlanRequest) throws StripeException {
        ClassPlanDto classPlan = paymentService.createClassPlan(createClassPlanRequest);
        return ResponseEntity.ok(classPlan);
    }

    @PutMapping("/class-plan")
    public ResponseEntity<ClassPlanDto> updateClassPlan(@RequestBody UpdateClassPlanRequest updateClassPlanRequest) throws StripeException {
        ClassPlanDto classPlan = paymentService.updateClassPlan(updateClassPlanRequest);
        return ResponseEntity.ok(classPlan);
    }

    @DeleteMapping("/class-plan/{classPlanId}")
    public ResponseEntity<Void> deleteClassPlan(@PathVariable String classPlanId) throws StripeException {
        paymentService.deleteClassPlan(classPlanId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/enroll")
    public ResponseEntity<SubscriptionDetailsDto> enrollClassPlan(@RequestBody EnrolClassPlanRequest enrolClassPlanRequest) throws StripeException {
        SubscriptionDetailsDto subscriptionDetails = paymentService.enrollClassPlan(enrolClassPlanRequest);
        return ResponseEntity.ok(subscriptionDetails);
    }

    @GetMapping("/subscription/{subscriptionId}")
    public ResponseEntity<?> getSubscriptionDetails(@PathVariable String subscriptionId) throws StripeException {
        return ResponseEntity.ok(paymentService.getSubscriptionDetails(subscriptionId));
    }

    @DeleteMapping("/subscription/{subscriptionId}")
    public ResponseEntity<?> cancelSubscription(@PathVariable String subscriptionId) throws StripeException {
        paymentService.cancelSubscription(subscriptionId);
        return ResponseEntity.noContent().build();
    }
}
