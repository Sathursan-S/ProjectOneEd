package com.projectoneed.authservice.repository;

import com.projectoneed.authservice.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUsername(String username);
    User findByUserId(String userId);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
