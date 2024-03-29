package com.projectoneed.authservice.repository;

import com.projectoneed.authservice.model.Role;
import com.projectoneed.authservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUsername(String username);
}
