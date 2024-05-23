package com.projectoneed.ClassManagementService.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Classes")
public class Class {
    @Id
    private String id;
    private String className;
    private double fee;
    private List<ClassTimeSlot> classTimeSlots;
//    private List<EntrolledStudentId> entrolledStudentIds;
}
