package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassRequest;
import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassSpaceRequest;
import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.repository.ClassRepository;
import com.projectoneed.userandclassmanagementservice.repository.ClassSpaceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class ClassSpaceServiceTest {
    @Mock
    private ClassSpaceRepository classSpaceRepository;
    @Mock
    private ClassRepository classRepository;

    @InjectMocks
    private ClassSpaceService classSpaceService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void getAllClassSpaces() {
        List<ClassSpace> expectedClassSpaces = List.of(new ClassSpace());
        when(classSpaceRepository.findAll()).thenReturn(expectedClassSpaces);

        List<ClassSpace> actualClassSpaces = classSpaceService.getAllClassSpaces();

        assertSame(expectedClassSpaces, actualClassSpaces);
        verify(classSpaceRepository).findAll();
    }

    @Test
    void getClassSpaceById() {
        String id = "1";
        ClassSpace expectedClassSpace = new ClassSpace();
        when(classSpaceRepository.findById(id)).thenReturn(Optional.of(expectedClassSpace));

        ClassSpace actualClassSpace = classSpaceService.getClassSpaceById(id);

        assertSame(expectedClassSpace, actualClassSpace);
        verify(classSpaceRepository).findById(id);
    }

    @Test
    void createClassSpace() {
        ClassSpace classSpace = new ClassSpace();
        CreateClassSpaceRequest request = CreateClassSpaceRequest.builder().build(); // Populate request appropriately
        when(classSpaceRepository.save(any(ClassSpace.class))).thenReturn(classSpace);

        ClassSpace createdClassSpace = classSpaceService.createClassSpace(request);

        assertNotNull(createdClassSpace);
        verify(classSpaceRepository).save(any(ClassSpace.class));
    }

    @Test
    void deleteClassSpaceById() {
        String id = "1";
        doNothing().when(classSpaceRepository).deleteById(id);

        classSpaceService.deleteClassSpaceById(id);

        verify(classSpaceRepository).deleteById(id);
    }

    @Test
    void testAddClassToClassSpace() {
        // Arrange
        String classSpaceId = UUID.randomUUID().toString();
        ClassSpace classSpace = new ClassSpace();
        classSpace.setClassSpaceId(classSpaceId);
        classSpace.setClasses(new ArrayList<>());

        CreateClassRequest classDetails = CreateClassRequest.builder()
                .classSpaceId(classSpaceId)
                .build();

        // Assume other setters are called for classDetails

        Class newClass = Class.builder()
                .classId(UUID.randomUUID().toString())
                .classSpaceId(classSpace)
                .className("Math 101")
                .classDescription("Basic Math Class")
                .classFee(100.0)
                .gradeCategory("Grade 1")
                .medium("English")
                .instructorName("John Doe")
                .syllabus(classDetails.getSyllabus())
                .timeSlots(classDetails.getClassSchedule())
                .build();

        when(classSpaceRepository.findById(classSpaceId)).thenReturn(Optional.of(classSpace));
        when(classRepository.save(any(Class.class))).thenReturn(newClass);
        when(classSpaceRepository.save(any(ClassSpace.class))).thenReturn(classSpace);

        // Act
        ClassSpace updatedClassSpace = classSpaceService.addClassToClassSpace(classDetails);

        // Assert
        assertNotNull(updatedClassSpace);
        assertEquals(1, updatedClassSpace.getClasses().size());
        assertEquals("Math 101", updatedClassSpace.getClasses().get(0).getClassName());

        verify(classSpaceRepository, times(1)).findById(classSpaceId);
        verify(classRepository, times(1)).save(any(Class.class));
        verify(classSpaceRepository, times(1)).save(any(ClassSpace.class));
    }

//    @Test
//    void getTop3ClassSpaces() {
//        List<ClassSpace> expectedTopClassSpaces = List.of(new ClassSpace(), new ClassSpace(), new ClassSpace());
//        when(classRepository.findTop3ByOrderByEnrolledStudentsDesc(any())).thenReturn(expectedTopClassSpaces);
//
//        List<Class> actualTopClassSpaces = classSpaceService.getTop3ClassSpaces();
//
//        assertEquals(3, actualTopClassSpaces.size());
//        assertSame(expectedTopClassSpaces, actualTopClassSpaces);
//        verify(classRepository).findTop3ByOrderByEnrolledStudentsDesc(any());
//    }
}
