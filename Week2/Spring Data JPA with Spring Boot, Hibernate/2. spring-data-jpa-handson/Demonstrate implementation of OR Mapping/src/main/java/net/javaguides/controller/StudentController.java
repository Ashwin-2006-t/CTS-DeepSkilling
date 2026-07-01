package net.javaguides.controller;


import net.javaguides.entity.Student;
import net.javaguides.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired//cant autowired for final field
    private StudentRepository repository;

//    public StudentController(StudentRepository repository) {
//        this.repository = repository;
//    }

    @GetMapping
    public List<Student> findAll(){
        return  repository.findAll();
    }

    @PostMapping
    public Student saveStudent(@RequestBody Student student) {
        return repository.save(student);
    }
}