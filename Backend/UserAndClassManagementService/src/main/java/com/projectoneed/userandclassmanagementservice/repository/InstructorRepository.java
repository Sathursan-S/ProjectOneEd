package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.userandclassmanagementservice.models.user.instructor.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InstructorRepository extends JpaRepository<Instructor, String> {
    Optional<Instructor> findByUserId(String userId);
    Optional<Instructor> findByUsername(String username);
    Optional<List<Instructor>> getAllInstructors();
}
