package com.projectoneed.userandclassmanagementservice.repository;

import com.fasterxml.jackson.databind.introspect.AnnotationCollector;
import com.google.common.base.Optional;
import com.projectoneed.userandclassmanagementservice.models.classspace.JoinRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JoinRequestRepository extends MongoRepository<JoinRequest, String> {
    Optional<JoinRequest> findByStudentIdAndClassId(String studentId, String classId);
}
