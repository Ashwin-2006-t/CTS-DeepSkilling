package net.javaguides.service;



import net.javaguides.entity.Student;
import net.javaguides.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getByName(String name) {
        return repository.findByStudentName(name);
    }

    public List<Student> getByNameNative(String name) {
        return repository.findByNameNative(name);
    }

    public List<String> getAllNames() {
        return repository.findAllStudentNames();
    }
}