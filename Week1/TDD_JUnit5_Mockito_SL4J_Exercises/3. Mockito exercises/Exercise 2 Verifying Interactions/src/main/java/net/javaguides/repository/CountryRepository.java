package net.javaguides.repository;

import net.javaguides.model.Country;

public interface CountryRepository {

    Country findById(int id);

    void save(Country country);
}