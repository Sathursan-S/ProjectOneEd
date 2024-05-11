package com.projectoneed.userandclassmanagementservice.controller.user;

import com.projectoneed.userandclassmanagementservice.dto.CreateUserRequest;
import com.projectoneed.userandclassmanagementservice.dto.student.CreateAndUpdateStudentRequest;
import com.projectoneed.userandclassmanagementservice.dto.student.GetAllStudentsResponse;
import com.projectoneed.userandclassmanagementservice.models.user.student.Student;
import com.projectoneed.userandclassmanagementservice.service.StudentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class StudentControllerTest {
    @Mock
    private StudentService studentService;

    @InjectMocks
    private StudentController studentController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void getAllStudents() {
        List<GetAllStudentsResponse> response = List.of(GetAllStudentsResponse.builder().build());
        when(studentService.getAllStudents()).thenReturn(response);

        List<GetAllStudentsResponse> result = studentController.getAllStudents();

        assertEquals(response, result);
        verify(studentService).getAllStudents();
    }

    @Test
    void createStudent() {
        CreateUserRequest request = CreateUserRequest.builder().build();
        when(studentService.createStudent(any(CreateUserRequest.class))).thenReturn(request);

        ResponseEntity<CreateUserRequest> response = studentController.createStudent(request);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(request, response.getBody());
        verify(studentService).createStudent(request);
    }

    @Test
    void updateStudent() {
        CreateAndUpdateStudentRequest request =CreateAndUpdateStudentRequest.builder().build();
        Student expectedStudent = new Student();

        when(studentService.updateStudent(any())).thenReturn(expectedStudent);

        ResponseEntity<?> response = studentController.updateStudent(request);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertSame(expectedStudent, response.getBody());
        verify(studentService).updateStudent(request);
    }
}