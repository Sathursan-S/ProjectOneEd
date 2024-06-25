package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.sharedlib.dto.payment.ClassPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassPlanRepository extends JpaRepository<ClassPlan, String> {
}
