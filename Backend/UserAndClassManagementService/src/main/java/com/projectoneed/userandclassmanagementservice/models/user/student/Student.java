package com.projectoneed.userandclassmanagementservice.models.user.student;

import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import lombok.*;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Student {
    @Id
    private String userId;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
    private String phoneNumber;
}
