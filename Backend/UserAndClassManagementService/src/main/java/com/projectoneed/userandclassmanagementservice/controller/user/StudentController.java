package com.projectoneed.userandclassmanagementservice.controller.user;

import com.projectoneed.userandclassmanagementservice.dto.student.CreateAndUpdateStudentRequest;
import com.projectoneed.userandclassmanagementservice.dto.student.CreateStudentResponse;
import com.projectoneed.userandclassmanagementservice.dto.student.GetAllStudentsResponse;
import com.projectoneed.userandclassmanagementservice.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/student")
@RequiredArgsConstructor
public class StudentController {
    private final StudentService studentService;

    @GetMapping("/students")
    public List<GetAllStudentsResponse> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("create")
    public ResponseEntity<CreateStudentResponse> createStudent(CreateAndUpdateStudentRequest request) {
        try{
            return ResponseEntity.ok(studentService.createStudent(request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("update")
    public ResponseEntity<?> updateStudent(CreateAndUpdateStudentRequest request) {
        return ResponseEntity.ok().body(
                studentService.updateStudent(request)
        );
    }

    @DeleteMapping("delete")
    public ResponseEntity<?> deleteStudent(DeleteStudentRequest request) {
        return studentService.deleteStudent(request);
    }

    @GetMapping("get-by-id")
    public GetStudentByIdResponse getStudentById(GetStudentByIdRequest request) {
        return studentService.getStudentById(request);
    }

    @GetMapping("get-by-username")
    public GetStudentByUsernameResponse getStudentByUsername(GetStudentByUsernameRequest request) {
        return studentService.getStudentByUsername(request);
    }
}
