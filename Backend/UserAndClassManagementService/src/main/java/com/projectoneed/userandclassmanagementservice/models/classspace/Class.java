package com.projectoneed.userandclassmanagementservice.models.classspace;

import com.projectoneed.userandclassmanagementservice.models.user.student.Student;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Classes")
public class Class {
    @MongoId
    private String classId;
    private String classSpaceId;
    private String className;
    private String gradeCategory;
    private String instructorName;
    private String image;
    private String classDescription;
    private String medium;
    private double classFee;
    private List<Student> students;
    private List<Syllabus> syllabus;
    private Date commencementDate;
    private List<TimeSlot> timeSlots;
    private List<Review> reviews;
}