package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.userandclassmanagementservice.dto.CreateUserRequest;
import com.projectoneed.userandclassmanagementservice.dto.instructor.CreateAndUpdateInstructorRequest;
import com.projectoneed.userandclassmanagementservice.dto.instructor.CreateInstructorResponse;
import com.projectoneed.userandclassmanagementservice.dto.instructor.GetAllInstructorsResponse;
import com.projectoneed.userandclassmanagementservice.models.user.instructor.Instructor;
import com.projectoneed.userandclassmanagementservice.repository.InstructorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class InstructorService {
    private final InstructorRepository instructorRepository;

    public CreateUserRequest createInstructor(CreateUserRequest request) {
        instructorRepository.findByUserId(request.getUserId())
                .ifPresent(s -> {
                    throw new RuntimeException("Instructor already exists");
                });
        Instructor instructor = Instructor.builder()
                .userId(request.getUserId())
                .username(request.getUsername())
                .email(request.getEmail())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phoneNumber(request.getPhone())
                .build();
        instructorRepository.save(instructor);

        return CreateUserRequest.builder()
                .userId(instructor.getUserId())
                .username(instructor.getUsername())
                .email(instructor.getEmail())
                .firstName(instructor.getFirstName())
                .lastName(instructor.getLastName())
                .phone(instructor.getPhoneNumber())
                .build();
    }

    public List<GetAllInstructorsResponse> getAllInstructors() {
        List<Instructor> instructors = instructorRepository.findAll();

    return instructors.stream().map(instructor -> GetAllInstructorsResponse.builder()
                        .userId(instructor.getUserId())
                        .username(instructor.getUsername())
                        .firstName(instructor.getFirstName())
                        .lastName(instructor.getLastName())
                        .email(instructor.getEmail())
                        .age(instructor.getAge())
                        .phoneNumber(instructor.getPhoneNumber())
                        .build())
                .collect(Collectors.toList());
    }

    public CreateInstructorResponse createInstructor(CreateAndUpdateInstructorRequest request) {
        Instructor instructor = Instructor.builder()
                .userId(request.getUserId())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phoneNumber(request.getPhone())
                .build();

        instructorRepository.save(instructor);

        return CreateInstructorResponse.builder()
                .instructorId(instructor.getUserId())
                .build();
    }

    public Object updateInstructor(CreateAndUpdateInstructorRequest request) {
        Instructor instructor = instructorRepository.findByUserId(request.getUserId())
                .orElseThrow(
                        () -> new RuntimeException("Instructor not found")
                );

instructor.setFirstName(request.getFirstName());
        instructor.setLastName(request.getLastName());
        instructor.setEmail(request.getEmail());
        instructor.setPhoneNumber(request.getPhone());

        return instructorRepository.save(instructor);
    }

    public CreateInstructorResponse getInstructorById(String id) {
        Instructor instructor = instructorRepository.findByUserId(id)
                .orElseThrow(
                        () -> new RuntimeException("Instructor not found")
                );

        return CreateInstructorResponse.builder()
                .instructorId(instructor.getUserId())
                .build();
    }
}
