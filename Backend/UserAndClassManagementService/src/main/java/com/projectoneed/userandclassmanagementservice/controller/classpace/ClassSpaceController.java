package com.projectoneed.userandclassmanagementservice.controller.classpace;

import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassSpaceRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.JoinRequestDto;
import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.service.ClassSpaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/class")
@RequiredArgsConstructor
public class ClassSpaceController {
    private final ClassSpaceService classSpaceService;

    @GetMapping("/classspaces")
    public ResponseEntity<List<ClassSpace>> getAllClassSpaces() {
        return ResponseEntity.ok(
                classSpaceService.getAllClassSpaces()
                );
    }

    @GetMapping("/classes")
    public ResponseEntity<List<Class>> getAllClasses() {
        return ResponseEntity.ok(
                classSpaceService.getAllClasses()
        );
    }

    @GetMapping("/classspace/{id}")
    public ResponseEntity<ClassSpace> getClassSpaceById(@PathVariable String id) {
        return ResponseEntity.ok(
                classSpaceService.getClassSpaceById(id)
        );
    }

    @GetMapping("/classSpace/{instructionId}")
    public ResponseEntity<List<ClassSpace>> getClassSpaceByInstructorId(@PathVariable String instructionId) {
        return ResponseEntity.ok(
                classSpaceService.getClassSpaceByInstructorId(instructionId)
        );
    }

    @GetMapping("/classes-by-instr/{InstructorId}")
    public ResponseEntity<List<Class>> getClassesByInstructorId(@PathVariable String InstructorId) {
        return ResponseEntity.ok(
                classSpaceService.getClassesByInstructorId(InstructorId)
        );
    }

    @GetMapping("/class/{id}")
    public ResponseEntity<?> getClassById(@PathVariable String id) {
        try {
            return ResponseEntity.ok(
                    classSpaceService.getClassById(id)
            );
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Class not found " +e.getMessage());
        }
    }

    @PostMapping("/createClassSpace")
    public ClassSpace createClassSpace(@RequestBody CreateClassSpaceRequest classSpace) {
        return classSpaceService.createClassSpace(classSpace);
    }

    @PostMapping("/createClass")
    public ClassSpace createClassWithinSpace( @RequestBody CreateClassRequest classDetails) {
        ClassSpace classSpace = classSpaceService.getClassSpaceById(classDetails.getClassSpaceId());
        String classSpaceId = classDetails.getClassSpaceId();
        if (classSpace != null) {
            return classSpaceService.addClassToClassSpace(classDetails);
        } else {
            throw new RuntimeException("Class space with id " + classSpaceId + " not found");
        }
    }

    @DeleteMapping("/delete/{id}")
    public void deleteClassSpace(@PathVariable String id) {

        classSpaceService.deleteClassSpaceById(id);
    }

    @PutMapping("/join")
    public ResponseEntity<?> joinClass(
            @RequestBody JoinRequestDto request) {
        try {
            return ResponseEntity.ok(classSpaceService.joinClass(request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to join class"+ e.getMessage());
        }
    }

    @GetMapping("/top3")
    public List<Class> getTop3ClassSpaces() {
        return classSpaceService.getTop3ClassSpaces();
    }

    @GetMapping("/classes/{ClassSpaceId}")
    public ResponseEntity<Optional<List<Class>>> getClassesByClassSpaceId(@PathVariable String ClassSpaceId) {
        try {
            return ResponseEntity.ok(
                    classSpaceService.getClassesByClassSpaceId(ClassSpaceId)
            );
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
