package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassSpaceRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.JoinRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.JoinRequestDto;
import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.models.classspace.JoinRequest;
import com.projectoneed.userandclassmanagementservice.repository.ClassRepository;
import com.projectoneed.userandclassmanagementservice.repository.ClassSpaceRepository;
import com.projectoneed.userandclassmanagementservice.repository.JoinRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClassSpaceService {
    private final ClassSpaceRepository classSpaceRepository;
    private final ClassRepository classRepository;
    private final JoinRequestRepository joinRequestRepository;

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

    public ClassSpace createClassSpace(CreateClassSpaceRequest classSpace) {
        try {
            return classSpaceRepository.save(ClassSpace.builder()
                            .instructorId(classSpace.getInstructorId())
                    .classSpaceName(classSpace.getClassSpaceName())
                    .classSpaceDescription(classSpace.getClassSpaceDescription()).build());
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

    public ClassSpace addClassToClassSpace(String classSpaceId, Class classDetails) {
        try {
            if (classRepository.existsByClassNameAndClassSpaceId(classDetails.getClassName(), classDetails.getClassSpaceId())){
                throw new RuntimeException("Class already exists");
            }
            Class newClass = classRepository.save(classDetails);

//            todo create subscription plan


            ClassSpace classSpace = classSpaceRepository.findById(classSpaceId).orElse(null);
            if (classSpace != null) {
                classSpace.getClasses().add(newClass);
                return classSpaceRepository.save(classSpace);
            } else {
                throw new RuntimeException("Class space with id " + classSpaceId + " not found");
            }
        } catch (Exception e) {
            throw new RuntimeException("Error while adding class to class space");
        }
    }

    public List<ClassSpace> getTop3ClassSpaces() {
        try {
            return classSpaceRepository.findTop3ByOrderByEnrolledStudentsDesc(Pageable.unpaged());
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching top 3 class spaces");
        }
    }

    public JoinRequest joinClass(JoinRequestDto request) {
        try {
            Class classDetails = classRepository.findById(request.getClassId())
                    .orElseThrow(
                            () -> new RuntimeException("Class not found")
                    );

            JoinRequest joinRequest = JoinRequest.builder()
                    .classId(request.getClassId())
                    .studentId(request.getStudentId())
                    .status(JoinRequest.Status.PENDING)
                    .build();
            joinRequestRepository.save(joinRequest);

//            todo send request to instructor

//            todo send notification to instructor

//            todo process payment

//            todo send notification to student

            return joinRequest;

        } catch (Exception e) {
            throw new RuntimeException("Error while joining class" + e.getMessage());
        }
    }
}
