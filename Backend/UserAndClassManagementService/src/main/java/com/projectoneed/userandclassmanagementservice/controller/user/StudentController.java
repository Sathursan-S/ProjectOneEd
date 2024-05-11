package com.projectoneed.userandclassmanagementservice.controller.user;

import com.projectoneed.userandclassmanagementservice.dto.CreateUserRequest;
import com.projectoneed.userandclassmanagementservice.dto.student.CreateAndUpdateStudentRequest;
import com.projectoneed.userandclassmanagementservice.dto.student.CreateStudentResponse;
import com.projectoneed.userandclassmanagementservice.dto.student.GetAllStudentsResponse;
import com.projectoneed.userandclassmanagementservice.service.StudentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/student")
@RequiredArgsConstructor
@Slf4j
public class StudentController {
    private final StudentService studentService;

    @GetMapping("/students")
    public List<GetAllStudentsResponse> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("create")
    public ResponseEntity<CreateUserRequest> createStudent(
            @RequestBody CreateUserRequest request) {
        try{
            return ResponseEntity.ok(studentService.createStudent(request));
        } catch (Exception e) {
            throw new RuntimeException("Failed to create student");
        }
    }

    @PostMapping("update")
    public ResponseEntity<?> updateStudent(@RequestBody CreateAndUpdateStudentRequest request) {
        return ResponseEntity.ok().body(
                studentService.updateStudent(request)
        );
    }

}
