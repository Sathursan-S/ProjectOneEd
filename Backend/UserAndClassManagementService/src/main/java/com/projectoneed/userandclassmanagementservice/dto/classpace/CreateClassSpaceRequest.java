package com.projectoneed.userandclassmanagementservice.dto.classpace;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateClassSpaceRequest {
    private String classSpaceName;
    private String classSpaceDescription;
    private String instructorId;
}
