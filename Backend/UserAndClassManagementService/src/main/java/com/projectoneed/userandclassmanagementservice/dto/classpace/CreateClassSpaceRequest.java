package com.projectoneed.userandclassmanagementservice.dto.classpace;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateClassSpaceRequest {
    private String classSpaceName;
    private String classSpaceDescription;
    private String instructorId;
}
