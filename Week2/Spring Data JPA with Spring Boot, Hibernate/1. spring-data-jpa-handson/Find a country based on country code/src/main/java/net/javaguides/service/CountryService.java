package net.javaguides.service;


import net.javaguides.entity.Country;
import net.javaguides.repository.CountryRepository;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    private final CountryRepository repository;

    public CountryService(CountryRepository repository) {
        this.repository = repository;
    }

    public Country getCountryByCode(String code) {
        return repository.findByCode(code);
    }

}