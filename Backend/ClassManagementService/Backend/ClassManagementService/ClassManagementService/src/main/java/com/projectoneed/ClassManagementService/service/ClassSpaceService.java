package com.projectoneed.ClassManagementService.service;

import com.projectoneed.ClassManagementService.model.ClassSpace;
import com.projectoneed.ClassManagementService.repository.ClassSpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassSpaceService {
    @Autowired
    private ClassSpaceRepository classspaceRepository;

    public List<ClassSpace> getAllClassSpaces() {
        return classspaceRepository.findAll();
    }

}
