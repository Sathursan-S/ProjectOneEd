package com.projectoneed.userandclassmanagementservice.dto.classpace;

import com.projectoneed.userandclassmanagementservice.models.classspace.Syllabus;
import com.projectoneed.userandclassmanagementservice.models.classspace.TimeSlot;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateClassRequest {
    private String classSpaceId;
    private String instructorId;
    private String className;
    private String gradeCategory;
    private String instructorName;
    private String classDescription;
    private String medium;
    private double classFee;
    private List<Syllabus> syllabus;
    private List<TimeSlot> classSchedule;
}
