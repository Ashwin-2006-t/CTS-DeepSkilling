package net.javaguides.service;

import net.javaguides.model.Country;
import net.javaguides.repository.CountryRepository;

public class CountryServiceImpl implements CountryService {

    private CountryRepository repository;

    public CountryServiceImpl(CountryRepository repository) {
        this.repository = repository;
    }

    @Override
    public Country getCountryById(int id) {
        return repository.findById(id);
    }

    @Override
    public void addCountry(Country country) {
        repository.save(country);
    }
}