package net.javaguides.service;

import net.javaguides.model.Country;

public interface CountryService {

    Country getCountryById(int id);

    void addCountry(Country country);
}