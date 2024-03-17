package com.projectoneed.ClassManagementService.service;

import com.projectoneed.ClassManagementService.model.ClassSpace;
import com.projectoneed.ClassManagementService.model.Class;
import com.projectoneed.ClassManagementService.repository.ClassRepository;
import com.projectoneed.ClassManagementService.repository.ClassSpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassSpaceService {
    @Autowired
    private ClassSpaceRepository classSpaceRepository;


    public List<ClassSpace> getAllClassSpaces() {

        return classSpaceRepository.findAll();
    }


    public ClassSpace getClassSpaceById(String id) {
        Optional<ClassSpace> optionalClassSpace = classSpaceRepository.findById(id);
        return optionalClassSpace.orElse(null);
    }


    public ClassSpace createClassSpace(ClassSpace classSpace) {
        return classSpaceRepository.save(classSpace);
    }

    public void deleteClassSpaceById(String id)
    {
        classSpaceRepository.deleteById(id);
    }
}
