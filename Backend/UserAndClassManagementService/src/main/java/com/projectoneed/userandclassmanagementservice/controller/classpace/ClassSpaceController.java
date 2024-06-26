package com.projectoneed.userandclassmanagementservice.controller.classpace;

import com.projectoneed.userandclassmanagementservice.dto.ManageJoinRequestDto;
import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassSpaceRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.JoinRequestDto;
import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.service.ClassSpaceService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/class")
@RequiredArgsConstructor
public class ClassSpaceController {
    private static final Logger log = LoggerFactory.getLogger(ClassSpaceController.class);
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

    @DeleteMapping("/delete-class/{id}")
    public void deleteClass(@PathVariable String id) {
        classSpaceService.deleteClassById(id);
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

    @PutMapping("/manage-join-request")
    public ResponseEntity<?> manageJoinRequest(
            @RequestBody ManageJoinRequestDto request) {
        try {
            return ResponseEntity.ok(classSpaceService.manageJoinRequest(request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to manage join request"+ e.getMessage());
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

    @GetMapping("/class-by-student/{studentId}")
    public ResponseEntity<List<Class>> getClassesByStudentId(@PathVariable String studentId) {
        try {
            return ResponseEntity.ok(
                    classSpaceService.getClassesByStudentId(studentId)
            );
        } catch (Exception e) {
            log.error("Failed to get classes by student id", e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/cancel-join-request/{joinRequestId}")
    public ResponseEntity<?> cancelJoinRequest(@PathVariable String joinRequestId) {
        try {
            classSpaceService.cancelJoinRequest(joinRequestId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            log.error("Failed to cancel join request", e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
