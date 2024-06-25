package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassSpaceRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.JoinRequestDto;
import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.models.classspace.JoinRequest;
import com.projectoneed.userandclassmanagementservice.repository.ClassRepository;
import com.projectoneed.userandclassmanagementservice.repository.ClassSpaceRepository;
import com.projectoneed.userandclassmanagementservice.repository.JoinRequestRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClassSpaceService {
    private static final Logger log = LoggerFactory.getLogger(ClassSpaceService.class);
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
                            .classSpaceId(UUID.randomUUID().toString())
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

    public ClassSpace addClassToClassSpace(CreateClassRequest classDetails) {
        try {
            String classSpaceId = classDetails.getClassSpaceId();
            ClassSpace classSpace = classSpaceRepository.findById(classSpaceId)
                    .orElseThrow(() -> new RuntimeException("Class space not found"));

//            if (classSpace.getClasses() != null && classSpace.getClasses().stream()
//                    .anyMatch(existingClass -> existingClass.getClassName().equals(classDetails.getClassName())
//                            && existingClass.getClassSpaceId().equals(classSpaceId))) {
//                throw new RuntimeException("Class already exists in the class space");
//            }

            Class newClass = Class.builder()
                    .classId(UUID.randomUUID().toString())
                    .classSpaceId(classSpaceId)
                    .className(classDetails.getClassName())
                    .instructor(classDetails.getInstructorId())
                    .classDescription(classDetails.getClassDescription())
                    .classFee(classDetails.getClassFee())
                    .gradeCategory(classDetails.getGradeCategory())
                    .medium(classDetails.getMedium())
                    .instructorName(classDetails.getInstructorName())
                    .syllabus(classDetails.getSyllabus())
                    .timeSlots(classDetails.getClassSchedule())
                    .build();

            classRepository.save(newClass);

//            todo create subscription


            if (classSpace.getClasses() == null) {
                classSpace.setClasses(new ArrayList<>());
            }
            classSpace.getClasses().add(newClass);

            return classSpaceRepository.save(classSpace);
        } catch (Exception e) {
            throw new RuntimeException("Error while adding class to class space "  +e.getMessage());
        }
    }

    public List<Class> getTop3ClassSpaces() {
        try {
            return classRepository.findTop3ByOrderByEnrolledStudentsDesc(Pageable.unpaged());
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
            classDetails.getJoinRequests().add(joinRequest);

//            todo send notification to instructor

//            todo process payment

//            todo send notification to student

            return joinRequest;

        } catch (Exception e) {
            throw new RuntimeException("Error while joining class " + e.getMessage());
        }
    }

    public List<Class> getAllClasses() {
        try {
            return classRepository.findAll();
        }catch (Exception e){
            throw new RuntimeException("Error while fetching classes "+ e.getMessage());
        }
    }

    public Class getClassById(String id) {
        try {
            return classRepository.findByClassId(id).orElse(null);
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching class with id " + id + " " + e.getMessage());
        }
    }

    public Optional<List<Class>> getClassesByClassSpaceId(String classSpaceId) {
        try {
            log.info("Fetching classes for class space with id " + classSpaceId);
            ClassSpace classSpace = classSpaceRepository.findById(classSpaceId).orElseThrow(
                    () -> new RuntimeException("Class space not found")
            );
            log.info("Classes fetched for class space with id " + classSpaceId);
            return Optional.ofNullable(classSpace.getClasses());
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching classes for class space with id " + classSpaceId + " " + e.getMessage());
        }
    }

    public List<Class> getClassesByInstructorId(String instructionId) {
        try {
            return classRepository.findByInstructor(instructionId);
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching classes for instructor with id " + instructionId);
        }
    }

    public List<ClassSpace> getClassSpaceByInstructorId(String instructionId) {
        try {
            return classSpaceRepository.findClassSpacesByInstructorId(instructionId);
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching class spaces for instructor with id " + instructionId);
        }
    }

}
