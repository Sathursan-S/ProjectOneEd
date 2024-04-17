package com.projectoneed.userandclassmanagementservice.models.classspace;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "ClassSpaces")
public class ClassSpace {
    @Id
    private String classSpaceId;
    private String classSpaceName;
    private String classSpaceDescription;
    private String instructorId;
    private List<Class> classes;
}
