package com.projectoneed.userandclassmanagementservice.repository;

import com.projectoneed.userandclassmanagementservice.models.user.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, String>{
    Optional<Student> findByUserId(String s);
    Optional<Student> findByUsername(String username);
    List<Student> findAll();
}
