package net.javaguides.repository;


import net.javaguides.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country,Long> {

    Country findByCode(String code);

}