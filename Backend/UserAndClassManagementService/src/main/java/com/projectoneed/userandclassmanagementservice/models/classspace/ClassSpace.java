package com.projectoneed.userandclassmanagementservice.models.classspace;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.projectoneed.userandclassmanagementservice.models.user.student.Student;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "ClassSpaces")
public class ClassSpace {
    @MongoId
    private String classSpaceId;
    private String classSpaceName;
    private String classSpaceDescription;
    private String instructorId;
    @DBRef
    private List<Class> classes = new ArrayList<>();

    @PrePersist
    public void generateUUID() {
        if (classSpaceId == null) {
            classSpaceId = UUID.randomUUID().toString();
        }
    }
}