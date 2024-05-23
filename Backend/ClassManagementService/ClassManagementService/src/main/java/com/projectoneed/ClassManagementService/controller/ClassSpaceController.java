package com.projectoneed.ClassManagementService.controller;

import com.projectoneed.ClassManagementService.model.ClassSpace;
import com.projectoneed.ClassManagementService.model.Class;
import com.projectoneed.ClassManagementService.service.ClassSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ClassSpaceController {
    @Autowired
    private ClassSpaceService classSpaceService;



    @GetMapping("/classspaces")
    public List<ClassSpace> getAllClassSpaces() {

        return classSpaceService.getAllClassSpaces();
    }

    @GetMapping("/{id}")
    public ClassSpace getClassSpaceById(@PathVariable String id) {
        return classSpaceService.getClassSpaceById(id);
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
