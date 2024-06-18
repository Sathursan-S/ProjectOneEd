package com.projectoneed.userandclassmanagementservice.controller.user;

import com.projectoneed.sharedlib.dto.CreateUserRequest;
import com.projectoneed.userandclassmanagementservice.dto.instructor.CreateAndUpdateInstructorRequest;
import com.projectoneed.userandclassmanagementservice.dto.instructor.GetAllInstructorsResponse;
import com.projectoneed.userandclassmanagementservice.service.InstructorService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class InstructorControllerTest {

    @Mock
    private InstructorService instructorService;

    @InjectMocks
    private InstructorController instructorController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void getAllInstructors() {
        List<GetAllInstructorsResponse> response = List.of(GetAllInstructorsResponse.builder().build());
        when(instructorService.getAllInstructors()).thenReturn(response);
        List<GetAllInstructorsResponse> result = instructorController.getAllInstructors();
        assertEquals(response, result);
        verify(instructorService).getAllInstructors();
    }


    @Test
    void createInstructor() {
        CreateUserRequest request = CreateUserRequest.builder().build();
        when(instructorService.createInstructor(request)).thenReturn(request); // Adjust according to actual method signature
        ResponseEntity<?> response = instructorController.createInstructor(request);
        assertEquals(200, response.getStatusCodeValue());
        verify(instructorService).createInstructor(request);
    }

    @Test
    void updateInstructor() {
        CreateAndUpdateInstructorRequest request = CreateAndUpdateInstructorRequest.builder().build();
        when(instructorService.updateInstructor(request)).thenReturn(request); // Adjust according to actual method signature
        ResponseEntity<?> response = instructorController.updateInstructor(request);
        assertEquals(200, response.getStatusCodeValue());
        verify(instructorService).updateInstructor(request);
    }
}
