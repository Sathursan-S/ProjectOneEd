package com.projectoneed.userandclassmanagementservice.models.user.instructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.util.UUID;

@Entity
@Builder
@Getter
@Setter
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
    private String phoneNumber;
}
