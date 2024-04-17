package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.userandclassmanagementservice.dto.student.CreateAndUpdateStudentRequest;
import com.projectoneed.userandclassmanagementservice.dto.student.CreateStudentResponse;
import com.projectoneed.userandclassmanagementservice.dto.student.GetAllStudentsResponse;
import com.projectoneed.userandclassmanagementservice.models.user.student.Student;
import com.projectoneed.userandclassmanagementservice.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public List<GetAllStudentsResponse> getAllStudents() {
        List<Student> students = studentRepository.findAll();

        return students.stream().map(student -> GetAllStudentsResponse.builder()
                        .userId(student.getUserId())
                        .username(student.getUsername())
                        .firstName(student.getFirstName())
                        .lastName(student.getLastName())
                        .email(student.getEmail())
                        .age(student.getAge())
                        .phoneNumber(student.getPhoneNumber())
                        .build())
                .collect(Collectors.toList());
    }

    public CreateStudentResponse createStudent(CreateAndUpdateStudentRequest request) {
        return null;
    }

    public Student updateStudent(CreateAndUpdateStudentRequest request) {
        Student student = studentRepository.findByUserId(request.getStudentId())
                .orElseThrow(
                        () -> new RuntimeException("Student not found")
                );

        student.setFirstName(request.getStudentFirstName());
        student.setLastName(request.getStudentLastName());
        student.setEmail(request.getStudentEmail());
        student.setPhoneNumber(request.getPhoneNumber());

        return studentRepository.save(student);
    }
}
