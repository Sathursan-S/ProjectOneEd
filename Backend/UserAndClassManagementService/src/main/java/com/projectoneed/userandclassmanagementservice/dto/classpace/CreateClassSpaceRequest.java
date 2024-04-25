package com.projectoneed.userandclassmanagementservice.dto.classpace;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateClassSpaceRequest {
    private String classSpaceName;
    private String classSpaceDescription;
    private String instructorId;
}
