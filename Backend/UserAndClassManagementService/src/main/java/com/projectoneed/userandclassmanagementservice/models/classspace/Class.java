package com.projectoneed.userandclassmanagementservice.models.classspace;

import com.mongodb.lang.NonNull;
import lombok.*;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Classes")
public class Class {
    @MongoId
    private String classId;
    @NonNull
    private String classSpaceId;
    private String classPlanId;
    private String instructor;
    private String className;
    private String gradeCategory;
    private String instructorName;
    private String classDescription;
    private String medium;
    private double classFee;
    @UniqueElements
    private List<String> enrolledStudents = new ArrayList<>();
    private List<Syllabus> syllabus;
    private List<TimeSlot> timeSlots;
    private List<Review> reviews;
    @DBRef
    private List<JoinRequest> joinRequests = new ArrayList<>();
}