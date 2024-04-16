package com.projectoneed.authservice.model.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permissions {
    STUDENT_READ("student:read"),
    STUDENT_WRITE("student:write"),
    STUDENT_DELETE("student:delete"),
    STUDENT_UPDATE("student:update"),

    INSTRUCTOR_READ("instructor:read"),
    INSTRUCTOR_WRITE("instructor:write"),
    INSTRUCTOR_DELETE("instructor:delete"),
    INSTRUCTOR_UPDATE("instructor:update");

    @Getter
    private final String permission;
}
