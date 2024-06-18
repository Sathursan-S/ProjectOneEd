package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClassSpaceRepository extends MongoRepository<ClassSpace, String>{
    Optional<ClassSpace> findByClassSpaceId(String classSpaceId);
    Optional<ClassSpace> findByClassSpaceName(String classSpaceName);
    List<ClassSpace> findAll();
    List<ClassSpace> findTop3ByOrderByEnrolledStudentsDesc(Pageable pageable);
}
