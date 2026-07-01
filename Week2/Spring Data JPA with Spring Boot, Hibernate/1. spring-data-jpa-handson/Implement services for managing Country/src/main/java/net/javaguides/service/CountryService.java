package net.javaguides.service;


import net.javaguides.entity.Country;
import net.javaguides.repository.CountryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private final CountryRepository repository;

    public CountryService(CountryRepository repository) {
        this.repository = repository;
    }

    public List<Country> getAllCountries() {
        return repository.findAll();
    }

    public Country getCountryById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Country saveCountry(Country country) {
        return repository.save(country);
    }

    public void deleteCountry(Long id) {
        repository.deleteById(id);
    }
}