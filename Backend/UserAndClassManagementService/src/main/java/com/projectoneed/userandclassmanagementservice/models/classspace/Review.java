package com.projectoneed.userandclassmanagementservice.models.classspace;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class Review {
    private String reviewId;
    private String studentId;
    private String studentName;
    private String review;
    private Rating rating;
    private String reviewDate;
}
