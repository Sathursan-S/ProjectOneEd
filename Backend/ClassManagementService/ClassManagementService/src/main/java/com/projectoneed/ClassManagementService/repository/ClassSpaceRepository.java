package com.projectoneed.ClassManagementService.repository;

import com.projectoneed.ClassManagementService.model.ClassSpace;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ClassSpaceRepository extends MongoRepository<ClassSpace, String>{
//    @Override
//    Optional<ClassSpace> findById(String Id);
}
