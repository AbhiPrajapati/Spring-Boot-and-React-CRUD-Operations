package com.abhishek.restdemo.controller;

import com.abhishek.restdemo.model.Student;
import com.abhishek.restdemo.services.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SpringControllers {

    @Autowired
    private Services services;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getStudents")
    public List<Student> getStudents()
    {
        return services.getStudents();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody  Student student)
    {
        return services.addStudent(student);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addStudents")
    public List<Student> addStudent(@RequestBody  List<Student> students)
    {
        return services.addStudents(students);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/{id}")
    public String removeStudent(@PathVariable int id)
    {
        return services.removeStudent(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update")
    public String updateStudent(@RequestBody Student student) {
        return services.updateStudent(student);
    }

}
