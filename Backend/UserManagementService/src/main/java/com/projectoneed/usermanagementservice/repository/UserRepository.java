package com.projectoneed.usermanagementservice.repository;

import com.projectoneed.usermanagementservice.model.Role;
import com.projectoneed.usermanagementservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Optional<List<User>> getAllByRole(Role role);
}
