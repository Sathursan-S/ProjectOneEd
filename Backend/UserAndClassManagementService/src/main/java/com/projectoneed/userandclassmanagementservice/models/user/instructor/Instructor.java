package com.projectoneed.userandclassmanagementservice.models.user.instructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Entity
@Builder
@RequiredArgsConstructor
public class Instructor {
    @Id
    private String userId;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
    private int phoneNumber;
}
