package net.javaguides.repository;


import net.javaguides.entity.Student;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    // -------------------------
    // 1. HQL QUERY - Hibernate Query Language (HQL)
    // -------------------------

    @Query("SELECT s FROM Student s WHERE s.name = :name")
    List<Student> findByStudentName(@Param("name") String name);

    // -------------------------
    // 2. NATIVE SQL QUERY
    // -------------------------

    @Query(value = "SELECT * FROM student WHERE name = :name", nativeQuery = true)
    List<Student> findByNameNative(@Param("name") String name);

    // -------------------------
    // 3. FETCH ONLY NAME (PARTIAL DATA)
    // -------------------------

    @Query("SELECT s.name FROM Student s")
    List<String> findAllStudentNames();
}