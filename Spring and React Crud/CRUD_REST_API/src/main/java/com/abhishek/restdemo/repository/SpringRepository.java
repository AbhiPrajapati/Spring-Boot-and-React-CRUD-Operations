package com.abhishek.restdemo.repository;

import com.abhishek.restdemo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpringRepository extends JpaRepository<Student,Integer> {
}
