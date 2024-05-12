package com.projectoneed.ClassManagementService.repository;

import com.projectoneed.ClassManagementService.model.ClassSpace;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClassSpaceRepository extends MongoRepository<ClassSpace, Integer>{
}
