package com.projectoneed.ClassManagementService.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.projectoneed.ClassManagementService.model.Class;

public interface ClassRepository extends MongoRepository<Class, Integer>
{
}
