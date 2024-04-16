package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ClassSpaceRepository extends MongoRepository<ClassSpace, String>{
    Optional<ClassSpace> findByClassSpaceId(String classSpaceId);
    Optional<ClassSpace> findByClassSpaceName(String classSpaceName);
    Optional<List<ClassSpace>> getAllClassSpaces();
}
