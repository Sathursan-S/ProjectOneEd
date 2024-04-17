package com.projectoneed.userandclassmanagementservice.models.user.instructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
