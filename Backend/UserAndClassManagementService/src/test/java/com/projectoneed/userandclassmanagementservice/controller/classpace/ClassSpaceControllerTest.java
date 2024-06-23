package com.projectoneed.userandclassmanagementservice.controller.classpace;

import com.projectoneed.userandclassmanagementservice.dto.classpace.CreateClassSpaceRequest;
import com.projectoneed.userandclassmanagementservice.models.classspace.Class;
import com.projectoneed.userandclassmanagementservice.models.classspace.ClassSpace;
import com.projectoneed.userandclassmanagementservice.service.ClassSpaceService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class ClassSpaceControllerTest {

    @Mock
    private ClassSpaceService classSpaceService;

    @InjectMocks
    private ClassSpaceController classSpaceController;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getAllClassSpaces() {
        List<ClassSpace> classSpaces = Arrays.asList(new ClassSpace(), new ClassSpace(), new ClassSpace());
        when(classSpaceService.getAllClassSpaces()).thenReturn(classSpaces);

        ResponseEntity<List<ClassSpace>> response = classSpaceController.getAllClassSpaces();

        assertNotNull(response);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(3, response.getBody().size());
        verify(classSpaceService).getAllClassSpaces();
    }

    @Test
    void getClassSpaceById() {
        ClassSpace classSpace = new ClassSpace();
        String id = "1";
        when(classSpaceService.getClassSpaceById(id)).thenReturn(classSpace);

        ResponseEntity<ClassSpace> response = classSpaceController.getClassSpaceById(id);

        assertNotNull(response);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(classSpace, response.getBody());
        verify(classSpaceService).getClassSpaceById(id);
    }

    @Test
    void createClassSpace() {
        CreateClassSpaceRequest request = CreateClassSpaceRequest.builder().build();
        ClassSpace createdClassSpace = new ClassSpace();
        when(classSpaceService.createClassSpace(request)).thenReturn(createdClassSpace);

        ClassSpace response = classSpaceController.createClassSpace(request);

        assertNotNull(response);
        assertEquals(createdClassSpace, response);
        verify(classSpaceService).createClassSpace(request);
    }

//    @Test
//    void createClassWithinSpace() {
//        String classSpaceId = "1";
//        Class classDetails = new Class();
//        ClassSpace classSpace = new ClassSpace();
//        when(classSpaceService.getClassSpaceById(classSpaceId)).thenReturn(classSpace);
//        when(classSpaceService.addClassToClassSpace(classDetails)).thenReturn(classSpace);
//
//        ClassSpace response = classSpaceController.createClassWithinSpace(classDetails);
//
//        assertNotNull(response);
//        assertEquals(classSpace, response);
//        verify(classSpaceService).addClassToClassSpace(classDetails);
//    }

    @Test
    void deleteClassSpace() {
        String id = "1";
        doNothing().when(classSpaceService).deleteClassSpaceById(id);

        classSpaceController.deleteClassSpace(id);

        verify(classSpaceService).deleteClassSpaceById(id);
    }

    @Test
    void getTop3ClassSpaces() {
        List<Class> topClassSpaces = Arrays.asList(new Class(), new Class(), new Class());
        when(classSpaceService.getTop3ClassSpaces()).thenReturn(topClassSpaces);

        List<Class> response = classSpaceController.getTop3ClassSpaces();

        assertNotNull(response);
        assertEquals(3, response.size());
        verify(classSpaceService).getTop3ClassSpaces();
    }

}
