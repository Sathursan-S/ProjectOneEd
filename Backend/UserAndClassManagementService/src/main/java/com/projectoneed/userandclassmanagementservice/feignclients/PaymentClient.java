package com.projectoneed.userandclassmanagementservice.feignclients;

import com.projectoneed.sharedlib.dto.payment.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "PaymentService")
public interface PaymentClient {

    @PostMapping("/api/v1/payment/class-plan")
    ClassPlanDto createClassPlan(@RequestBody CreateClassPlanRequest createClassPlanRequest);

    @PutMapping("/api/v1/payment/class-plan")
    ClassPlanDto updateClassPlan(@RequestBody UpdateClassPlanRequest updateClassPlanRequest);

    @DeleteMapping("/api/v1/payment/class-plan/{classPlanId}")
    void deleteClassPlan(@PathVariable String classPlanId);

    @PostMapping("/api/v1/payment/enroll")
    SubscriptionDetailsDto enrollClassPlan(@RequestBody EnrolClassPlanRequest enrolClassPlanRequest);

    @GetMapping("/api/v1/payment/subscription/{subscriptionId}")
    SubscriptionDetailsDto getSubscriptionDetails(@PathVariable String subscriptionId);

    @DeleteMapping("/api/v1/payment/subscription/{subscriptionId}")
    void cancelSubscription(@PathVariable String subscriptionId);
}
