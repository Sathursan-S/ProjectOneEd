package com.projectoneed.ClassManagementService.controller;

import com.projectoneed.ClassManagementService.model.ClassSpace;
import com.projectoneed.ClassManagementService.service.ClassSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/classSpace")
public class ClassSpaceController {
    @Autowired
    private ClassSpaceService classSpaceService;

    @GetMapping
    public List<ClassSpace> getAllClassSpaces() {
        return classSpaceService.getAllClassSpaces();
    }

}
