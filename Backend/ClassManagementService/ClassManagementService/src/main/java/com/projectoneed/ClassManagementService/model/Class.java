package com.projectoneed.ClassManagementService.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Classes")
public class Class {
    private int id;
    private String className;
    private double fee;
}
