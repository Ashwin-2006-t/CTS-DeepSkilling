package net.javaguides.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String projectName;

    @ManyToMany(mappedBy = "projects")
    private List<Student> students;

    // getters and setters
}