package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClassRepository extends MongoRepository<Class, String> {
    Boolean existsByClassNameAndClassSpaceId(String className, String classSpaceId);
}
