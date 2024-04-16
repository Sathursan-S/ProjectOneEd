package com.projectoneed.userandclassmanagementservice.models.classspace;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "ClassSpaces")
public class ClassSpace {
    @Id
    private String classSpaceId;
    private String classSpaceName;
    private String classSpaceDescription;
    private String instructorId;
    private List<Class> classes;
}
