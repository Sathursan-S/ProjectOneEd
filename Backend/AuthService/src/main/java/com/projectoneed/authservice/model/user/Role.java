package com.projectoneed.authservice.model.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public enum Role {
    STUDENT(
            Set.of(
                    Permissions.STUDENT_READ,
                    Permissions.STUDENT_WRITE,
                    Permissions.STUDENT_DELETE,
                    Permissions.STUDENT_UPDATE
            )
    ),
    INSTRUCTOR(
            Set.of(
                    Permissions.INSTRUCTOR_READ,
                    Permissions.INSTRUCTOR_WRITE,
                    Permissions.INSTRUCTOR_DELETE,
                    Permissions.INSTRUCTOR_UPDATE
            )
    );

    @Getter
    private final Set<Permissions> permissions;

    public List<SimpleGrantedAuthority> getAuthorities(){
        var authorities= permissions.stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
