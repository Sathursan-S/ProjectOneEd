package com.projectoneed.ClassManagementService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
//@RestController
public class ClassManagementServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClassManagementServiceApplication.class, args);
	}
//	@GetMapping
//	public String hello(){
//		return "hello world";
//	}
}

