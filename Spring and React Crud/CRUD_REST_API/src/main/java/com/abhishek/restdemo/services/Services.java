package com.abhishek.restdemo.services;

import com.abhishek.restdemo.model.Student;
import com.abhishek.restdemo.repository.SpringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class Services {

    @Autowired
    private SpringRepository springRepository;
    public List<Student> getStudents()
    {
        return  springRepository.findAll();
    }

    public Student addStudent( Student student)
    {

        return springRepository.save(student);
    }

    public List<Student> addStudents( List<Student> students)
    {
        return springRepository.saveAll(students);
    }

    public String removeStudent(int id)
    {
        springRepository.deleteById(id);
        return "Student Deleted with Id : "+ id;
    }

    public String updateStudent(Student student) {
        Student stu = springRepository.findById(student.getId()).orElse(null);
        stu.setName(student.getName());
        stu.setAge(student.getAge());
        stu.setGender(student.getGender());
        springRepository.save(stu);
        return "File Updated with id" + student.getId();
    }
}
