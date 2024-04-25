package com.projectoneed.userandclassmanagementservice.models.classspace;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Classes")
public class Class {
    @MongoId
    private String classId;
    private String className;
    private String classDescription;
    private double classFee;
    private List<TimeSlot> timeSlots;
}