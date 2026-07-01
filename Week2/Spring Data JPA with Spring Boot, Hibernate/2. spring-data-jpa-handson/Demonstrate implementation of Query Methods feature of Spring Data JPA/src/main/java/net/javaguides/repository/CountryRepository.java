package net.javaguides.repository;

import net.javaguides.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country,Long> {

    Country findByCode(String code);

    Country findByName(String name);

    Country findByNameIgnoreCase(String name);

    List<Country> findByNameContaining(String text);

    List<Country> findByNameStartingWith(String prefix);

    List<Country> findByNameEndingWith(String suffix);

    Country findByCodeAndName(String code,String name);

    List<Country> findByCodeOrName(String code,String name);

}