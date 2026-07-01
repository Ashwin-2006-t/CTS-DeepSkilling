package net.javaguides.controller;


import net.javaguides.entity.Student;
import net.javaguides.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @PostMapping
    public Student addCountry(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    @GetMapping
    public List<Student> getStudents() {
        return service.getAllStudents();
    }
    // HQL
    @GetMapping("/hql/{name}")
    public List<?> getByHQL(@PathVariable String name) {
        return service.getByName(name);
    }

    // Native Query
    @GetMapping("/native/{name}")
    public List<?> getByNative(@PathVariable String name) {
        return service.getByNameNative(name);
    }

    // Partial Data
    @GetMapping("/names")
    public List<String> getNames() {
        return service.getAllNames();
    }
}