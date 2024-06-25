package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.sharedlib.dto.payment.SubscriptionDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriptionDetailsRepository extends JpaRepository<SubscriptionDetails, String>{
}
