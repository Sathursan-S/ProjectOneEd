package com.projectoneed.userandclassmanagementservice.controller.classpace;

import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.service.ClassSpaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/{id}")
    public ResponseEntity<ClassSpace> getClassSpaceById(@PathVariable String id) {
        return ResponseEntity.ok(
                classSpaceService.getClassSpaceById(id)
        );
    }

    @PostMapping("/createClassSpace")
    public ClassSpace createClassSpace(@RequestBody ClassSpace classSpace) {
        return classSpaceService.createClassSpace(classSpace);
    }

    @PostMapping("/{classSpaceId}/createClass")
    public ClassSpace createClassWithinSpace(@PathVariable String classSpaceId, @RequestBody Class classDetails) {
        ClassSpace classSpace = classSpaceService.getClassSpaceById(classSpaceId);

        if (classSpace != null) {
            List<Class> classes = classSpace.getClasses();
            classes.add(classDetails);
            classSpace.setClasses(classes);

            return classSpaceService.createClassSpace(classSpace);
        } else {
            throw new RuntimeException("Class space with id " + classSpaceId + " not found");
        }
    }

    @DeleteMapping("/delete/{id}")
    public void deleteClassSpace(@PathVariable String id) {

        classSpaceService.deleteClassSpaceById(id);
    }
}
