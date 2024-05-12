package com.projectoneed.userandclassmanagementservice.controller.user;

import com.projectoneed.userandclassmanagementservice.dto.CreateUserRequest;
import com.projectoneed.userandclassmanagementservice.dto.instructor.CreateAndUpdateInstructorRequest;
import com.projectoneed.userandclassmanagementservice.dto.instructor.CreateInstructorResponse;
import com.projectoneed.userandclassmanagementservice.dto.instructor.GetAllInstructorsResponse;
import com.projectoneed.userandclassmanagementservice.service.InstructorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/instructor")
@RequiredArgsConstructor
@Slf4j
public class InstructorController {
    private final InstructorService instructorService;

    @GetMapping("/instructor/{id}")
    public ResponseEntity<CreateInstructorResponse> getInstructorById(@PathVariable String id) {
        try {
            return ResponseEntity.ok(instructorService.getInstructorById(id));
        } catch (Exception e) {
            throw new RuntimeException("Failed to get instructor");
        }
    }

    @GetMapping("/instructors")
    public List<GetAllInstructorsResponse> getAllInstructors() {
        return instructorService.getAllInstructors();
    }

    @PostMapping("create")
    public ResponseEntity<CreateUserRequest> createInstructor(
            @RequestBody CreateUserRequest request){
        try{
            return ResponseEntity.ok(instructorService.createInstructor(request));
        } catch (Exception e) {
            throw new RuntimeException("Failed to create instructor");
        }

    }

    @PostMapping("update")
    public ResponseEntity<?> updateInstructor(@RequestBody CreateAndUpdateInstructorRequest request) {
        return ResponseEntity.ok().body(
                instructorService.updateInstructor(request)
        );
    }
}
