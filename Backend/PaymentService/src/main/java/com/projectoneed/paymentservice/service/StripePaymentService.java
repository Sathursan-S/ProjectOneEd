package com.projectoneed.paymentservice.service;

import com.projectoneed.sharedlib.dto.payment.*;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.Price;
import com.stripe.model.Product;
import com.stripe.model.Subscription;
import com.stripe.param.*;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class StripePaymentService implements PaymentService{
    private String stripeApiKey = "sk_test_51P0JZHRs0l25yhFN5qIBnaEE7CDFwVHQzL6ETpMVtdolyhv3slaMU8jBCTI6vSFPpglZPOFcI77bDI83lZ4iVFF900EcLkS5mv";

    public StripePaymentService() {
        Stripe.apiKey = stripeApiKey;
    }

    @Override
    public ClassPlanDto createClassPlan(CreateClassPlanRequest createClassPlanRequest) throws StripeException {
        // Crate the class (product in stripe)
        ProductCreateParams classParams =
                ProductCreateParams.builder()
                        .setName(createClassPlanRequest.getClassName())
                        .setDescription(createClassPlanRequest.getDescription())
                        .setActive(true).build();

        Product product = Product.create(classParams);

        // Create the price
        PriceCreateParams priceCreateParams =
                PriceCreateParams.builder()
                        .setCurrency("lkr")
                        .setUnitAmount((long)(createClassPlanRequest.getPrice() * 100))
                        .setRecurring(
                                PriceCreateParams.Recurring.builder()
                                        .setInterval(PriceCreateParams.Recurring.Interval.MONTH)
                                        .build()
                        )
                        .setProduct(product.getId())
                        .build();
        Price price = Price.create(priceCreateParams);

        // Create the class plan
        return ClassPlanDto.builder()
                .classId(createClassPlanRequest.getClassId())
                .name(createClassPlanRequest.getClassName())
                .description(createClassPlanRequest.getDescription())
                .price(price.getUnitAmount())
                .classPlanId(price.getId())
                .productId(product.getId())
                .priceId(price.getId())
                .instructorId(createClassPlanRequest.getInstructorId())
                .build();
    }

    @Override
    public ClassPlanDto updateClassPlan(UpdateClassPlanRequest updateClassPlanRequest) throws StripeException {
        Product resource = Product.retrieve(updateClassPlanRequest.getProductId());
        ProductUpdateParams params =
                ProductUpdateParams.builder()
                        .putMetadata(
                                "Name", updateClassPlanRequest.getName()
                        )
                        .putMetadata(
                                "Description", updateClassPlanRequest.getDescription()
                        )

                        .build();
        Product product = resource.update(params);

        Price price = Price.retrieve(updateClassPlanRequest.getPriceId());
        Map<String, Object> extraParams = new HashMap<>();
        extraParams.put("unit_amount", (long)(updateClassPlanRequest.getPrice() * 100));
        extraParams.put("product", product);

        PriceUpdateParams builder = PriceUpdateParams.builder()
                .putAllExtraParam(extraParams).build();

        price.update(builder);

        return ClassPlanDto.builder()
                .classId(updateClassPlanRequest.getClassId())
                .name(updateClassPlanRequest.getName())
                .description(updateClassPlanRequest.getDescription())
                .price(updateClassPlanRequest.getPrice())
                .classPlanId(updateClassPlanRequest.getClassPlanId())
                .productId(product.getId())
                .priceId(price.getId())
                .instructorId(updateClassPlanRequest.getInstructorId())
                .build();
    }

    @Override
    public void deleteClassPlan(String classPlanId) throws StripeException {
        Price price = Price.retrieve(classPlanId);
    }

    @Override
    public SubscriptionDetailsDto enrollClassPlan(EnrolClassPlanRequest enrolClassPlanRequest) throws StripeException {
        if(enrolClassPlanRequest.getStripeCustomerId() == null || enrolClassPlanRequest.getStripeCustomerId().isEmpty()){
            CustomerCreateParams params =
                    CustomerCreateParams.builder()
                            .setName(enrolClassPlanRequest.getStudentName())
                            .setEmail(enrolClassPlanRequest.getStudentEmail())
                            .build();
            Customer customer = Customer.create(params);

            enrolClassPlanRequest.setStripeCustomerId(customer.getId());
        }

        SubscriptionCreateParams params =
                SubscriptionCreateParams.builder()
                        .setCustomer(enrolClassPlanRequest.getStripeCustomerId())
                        .addItem(
                                SubscriptionCreateParams.Item.builder()
                                        .setPrice(enrolClassPlanRequest.getClassPlanId())
                                        .build()
                        )
                        .setCollectionMethod(SubscriptionCreateParams.CollectionMethod.SEND_INVOICE)
                        .build();
        Subscription subscription = Subscription.create(params);

        return SubscriptionDetailsDto.builder()
                .subscriptionId(subscription.getId())
                .studentId(enrolClassPlanRequest.getStudentId())
                .classPlanId(enrolClassPlanRequest.getClassPlanId())
                .status(subscription.getStatus())
                .build();
    }

    @Override
    public Object getSubscriptionDetails(String subscriptionId) throws StripeException {
        return Subscription.retrieve(subscriptionId);
    }


    @Override
    public void cancelSubscription(String subscriptionId) throws StripeException {
        Subscription resource = Subscription.retrieve(subscriptionId);
        SubscriptionCancelParams params = SubscriptionCancelParams.builder().build();
        resource.cancel(params);
    }
}
