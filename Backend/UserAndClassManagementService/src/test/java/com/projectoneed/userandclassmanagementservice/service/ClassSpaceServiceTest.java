package com.projectoneed.userandclassmanagementservice.service;

import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassSpaceRequest;
import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.repository.ClassSpaceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class ClassSpaceServiceTest {
    @Mock
    private ClassSpaceRepository classSpaceRepository;

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
    void addClassToClassSpace() {
        String classSpaceId = "1";
        Class classDetails = new Class(); // Properly initialize as necessary
        ClassSpace classSpace = new ClassSpace();
        classSpace.setClasses(List.of(new Class())); // Proper initialization required

        when(classSpaceRepository.findById(classSpaceId)).thenReturn(Optional.of(classSpace));
        when(classSpaceRepository.save(any(ClassSpace.class))).thenReturn(classSpace);

        ClassSpace updatedClassSpace = classSpaceService.addClassToClassSpace(classSpaceId, classDetails);

        assertNotNull(updatedClassSpace);
        assertTrue(updatedClassSpace.getClasses().contains(classDetails));
        verify(classSpaceRepository).save(classSpace);
    }

    @Test
    void getTop3ClassSpaces() {
        List<ClassSpace> expectedTopClassSpaces = List.of(new ClassSpace(), new ClassSpace(), new ClassSpace());
        when(classSpaceRepository.findTop3ByOrderByEnrolledStudentsDesc(any())).thenReturn(expectedTopClassSpaces);

        List<ClassSpace> actualTopClassSpaces = classSpaceService.getTop3ClassSpaces();

        assertEquals(3, actualTopClassSpaces.size());
        assertSame(expectedTopClassSpaces, actualTopClassSpaces);
        verify(classSpaceRepository).findTop3ByOrderByEnrolledStudentsDesc(any());
    }
}
