package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.sharedlib.dto.CreateUserRequest;
import com.projectoneed.userandclassmanagementservice.dto.student.CreateAndUpdateStudentRequest;
import com.projectoneed.userandclassmanagementservice.dto.student.CreateStudentResponse;
import com.projectoneed.userandclassmanagementservice.dto.DashboardResponse;
import com.projectoneed.userandclassmanagementservice.dto.student.GetAllStudentsResponse;
import com.projectoneed.userandclassmanagementservice.models.user.student.Student;
import com.projectoneed.userandclassmanagementservice.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public CreateUserRequest createStudent(CreateUserRequest request) {
        studentRepository.findByUserId(request.getUserId())
                .ifPresent(s -> {
                    throw new RuntimeException("Student already exists");
                });
        Student student = Student.builder()
                .userId(request.getUserId())
                .username(request.getUsername())
                .email(request.getEmail())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phoneNumber(request.getPhone())
                .build();
        studentRepository.save(student);

        return CreateUserRequest.builder()
                .userId(student.getUserId())
                .username(student.getUsername())
                .email(student.getEmail())
                .firstName(student.getFirstName())
                .lastName(student.getLastName())
                .phone(student.getPhoneNumber())
                .build();
    }

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
        studentRepository.findByUserId(request.getUserId())
                .ifPresent(s -> {
                    throw new RuntimeException("Student already exists");
                });

        return CreateStudentResponse.builder()
                .studentId(studentRepository.save(Student.builder()
                        .userId(request.getUserId())
                        .firstName(request.getFirstName())
                        .lastName(request.getLastName())
                        .email(request.getEmail())
                        .phoneNumber(request.getPhone())
                        .build()).getUserId())
                .build();
    }

    public Student updateStudent(CreateAndUpdateStudentRequest request) {
        Student student = studentRepository.findByUserId(request.getUserId())
                .orElseThrow(
                        () -> new RuntimeException("Student not found")
                );

        student.setFirstName(request.getFirstName());
        student.setLastName(request.getLastName());
        student.setEmail(request.getEmail());
        student.setPhoneNumber(request.getPhone());

        return studentRepository.save(student);
    }

    public DashboardResponse getStudentDashboard(String studentId) {
        try {
            Student student = studentRepository.findByUserId(studentId)
                    .orElseThrow(
                            () -> new RuntimeException("Student not found")
                    );

            return DashboardResponse.builder()
                    .userId(student.getUserId())
                    .userFirstName(student.getFirstName())
                    .userLastName(student.getLastName())
                    .userEmail(student.getEmail())
                    .build();
        } catch (Exception e) {
            throw new RuntimeException("Failed to get student dashboard");
        }
    }
}
