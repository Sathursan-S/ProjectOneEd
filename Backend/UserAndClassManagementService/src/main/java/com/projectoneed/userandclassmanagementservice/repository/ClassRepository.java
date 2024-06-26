package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.models.classspace.JoinRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ClassRepository extends MongoRepository<Class, String> {
    Boolean existsByClassNameAndClassSpaceId(String className, ClassSpace classSpaceId);
    List<Class> findTop3ByOrderByEnrolledStudentsDesc(Pageable pageable);
    List<Class> findByClassSpaceId(ClassSpace classSpaceId);
    List<Class> findAll();

   Optional<Class> findByClassId(String classId);

    List<Class> findByInstructor(String instructionId);

    Optional<List<Class>> findAllByEnrolledStudents(String studentId);

    Optional<Class> findClassByJoinRequests(JoinRequest joinRequest);
}
