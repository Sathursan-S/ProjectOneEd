package com.projectoneed.userandclassmanagementservice.models.classspace;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "joinRequests")
public class JoinRequest {

    @Id
    private String id;

    private String classId;
    private String studentId;

    @CreatedDate
    private LocalDate createdAt;

    @LastModifiedDate
    private LocalDate updatedAt;

    @Enumerated(EnumType.STRING)
    private Status status = Status.CREATED;

    public enum Status {
        CREATED,
        PENDING,
        ACCEPTED,
        REJECTED
    }
}
