package com.projectoneed.ClassManagementService.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Classes")
public class ClassTimeSlot {
    private String day;
    private String startTime;
    private String endTime;

}
