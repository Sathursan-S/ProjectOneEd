package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.repository.ClassSpaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClassSpaceService {
    private final ClassSpaceRepository classSpaceRepository;
    public List<ClassSpace> getAllClassSpaces() {
        try {
            return classSpaceRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching class spaces");
        }
    }

    public ClassSpace getClassSpaceById(String id) {
        try {
            return classSpaceRepository.findById(id).orElse(null);
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching class space with id " + id);
        }
    }

    public ClassSpace createClassSpace(ClassSpace classSpace) {
        try {
            return classSpaceRepository.save(classSpace);
        } catch (Exception e) {
            throw new RuntimeException("Error while creating class space");
        }
    }

    public void deleteClassSpaceById(String id) {
        try {
            classSpaceRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Error while deleting class space with id " + id);
        }
    }
}
