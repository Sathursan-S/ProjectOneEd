package com.projectoneed.userandclassmanagementservice.models.classspace;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class Syllabus {
    private String syllabusId;
    private String syllabusName;
    private String syllabusDescription;
    private String syllabusLink;
}
