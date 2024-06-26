package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.sharedlib.dto.payment.ClassPlanDto;
import com.projectoneed.sharedlib.dto.payment.CreateClassPlanRequest;
import com.projectoneed.userandclassmanagementservice.feignclients.PaymentClient;
import com.projectoneed.userandclassmanagementservice.dto.ManageJoinRequestDto;
import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassSpaceRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.JoinRequestDto;
import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassPlan;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.models.classspace.JoinRequest;
import com.projectoneed.userandclassmanagementservice.models.user.student.Student;
import com.projectoneed.userandclassmanagementservice.repository.*;
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
    private final StudentRepository studentRepository;
    private final PaymentClient paymentClient;
    private final ClassPlanRepository classPlanRepository;

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

    public void deleteClassById(String id) {
        try {
            paymentClient.deleteClassPlan(classPlanRepository.findById(id).get().getClassPlanId());
            classRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Error while deleting class with id " + id);
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

//            todo create subscription plan
            CreateClassPlanRequest createClassPlanRequest = CreateClassPlanRequest.builder()
                    .classId(newClass.getClassId())
                    .className(newClass.getClassName())
                    .description(newClass.getClassDescription())
                    .instructorId(newClass.getInstructor())
                    .build();

           ClassPlanDto classPlan= paymentClient.createClassPlan(createClassPlanRequest);
           log.info("Class plan created with id "+classPlan.getClassPlanId());

           classPlanRepository.save(ClassPlan.builder().classId(classPlan.getClassId())
                   .classPlanId(classPlan.getClassPlanId())
                   .description(classPlan.getDescription())
                   .instructorId(classPlan.getInstructorId())
                   .name(classPlan.getName())
                   .price(classPlan.getPrice())
                   .productId(classPlan.getProductId())
                   .priceId(classPlan.getPriceId())
                   .build());

           newClass.setClassPlanId(classPlan.getClassPlanId());
              classRepository.save(newClass);

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
        if(joinRequestRepository.findByStudentIdAndClassId(request.getStudentId(),request.getClassId()).isPresent()){
            if(joinRequestRepository.findByStudentIdAndClassId(request.getStudentId(),request.getClassId()).get().getStatus().equals(JoinRequest.Status.PENDING)){
                throw new RuntimeException("Join request already exists");
            }
            else if(joinRequestRepository.findByStudentIdAndClassId(request.getStudentId(),request.getClassId()).get().getStatus().equals(JoinRequest.Status.REJECTED)){
                joinRequestRepository.findByStudentIdAndClassId(request.getStudentId(),request.getClassId()).get().setStatus(JoinRequest.Status.PENDING);
                Class aClass = classRepository.findById(request.getClassId()).orElseThrow( ()-> new RuntimeException("Class not found"));
                aClass.getJoinRequests().add(joinRequestRepository.findByStudentIdAndClassId(request.getStudentId(),request.getClassId()).get());
                classRepository.save(aClass);
            }
        }
        try {
            Class classDetails = classRepository.findById(request.getClassId())
                    .orElseThrow(
                            () -> new RuntimeException("Class not found")
                    );

            JoinRequest joinRequest = JoinRequest.builder()
                    .id(UUID.randomUUID().toString())
                    .classId(request.getClassId())
                    .studentId(request.getStudentId())
                    .studentName(studentRepository.findByUserId(request.getStudentId()).get().getFirstName())
                    .status(JoinRequest.Status.PENDING)
                    .build();
            joinRequestRepository.save(joinRequest);

//            todo send request to instructor
            classDetails.getJoinRequests().add(joinRequest);
            classRepository.save(classDetails);

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

    public Object manageJoinRequest(ManageJoinRequestDto request) {
        try {
            JoinRequest joinRequest = joinRequestRepository.findById(request.getJoinRequestId())
                    .orElseThrow(
                            () -> new RuntimeException("Join request not found")
                    );

            joinRequest.setStatus(request.isAccepted() ? JoinRequest.Status.ACCEPTED : JoinRequest.Status.REJECTED);

            joinRequestRepository.save(joinRequest);

            Class classDetails = classRepository.findById(joinRequest.getClassId())
                    .orElseThrow(
                            () -> new RuntimeException("Class not found")
                    );

            if (request.isAccepted()) {
                classDetails.getEnrolledStudents().add(joinRequest.getStudentId());
                classDetails.getJoinRequests().remove(joinRequest);
                classRepository.save(classDetails);
            }

            return joinRequest;
        } catch (Exception e) {
            throw new RuntimeException("Error while managing join request " + e.getMessage());
        }
    }

    public List<Class> getClassesByStudentId(String studentId) {
        studentRepository.findByUserId(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        return classRepository.findAllByEnrolledStudents(studentId)
                .orElseThrow(()->new RuntimeException("No classes found for student with id "+studentId));
    }

    public void cancelJoinRequest(String joinRequestId) {
        JoinRequest joinRequest = joinRequestRepository.findById(joinRequestId)
                .orElseThrow(() -> new RuntimeException("Join request not found"));
        try {
            classRepository.findById(joinRequest.getClassId())
                    .orElseThrow(() -> new RuntimeException("Class not found"))
                    .getJoinRequests().remove(joinRequest);
            joinRequestRepository.deleteById(joinRequestId);
        } catch (Exception e) {
            throw new RuntimeException("Error while cancelling join request with id " + joinRequestId);
        }
    }
}
