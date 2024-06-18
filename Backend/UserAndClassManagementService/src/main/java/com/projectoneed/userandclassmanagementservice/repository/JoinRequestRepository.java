package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.userandclassmanagementservice.models.classspace.JoinRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JoinRequestRepository extends MongoRepository<JoinRequest, String> {
}
