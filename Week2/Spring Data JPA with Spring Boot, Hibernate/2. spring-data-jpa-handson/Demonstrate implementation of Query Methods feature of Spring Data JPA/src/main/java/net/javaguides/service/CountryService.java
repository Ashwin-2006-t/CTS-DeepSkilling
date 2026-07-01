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

    public Country findByCode(String code){
        return repository.findByCode(code);
    }

    public Country findByName(String name){
        return repository.findByName(name);
    }

    public Country findByNameIgnoreCase(String name){
        return repository.findByNameIgnoreCase(name);
    }

    public List<Country> findByContaining(String text){
        return repository.findByNameContaining(text);
    }

    public List<Country> findByStarting(String prefix){
        return repository.findByNameStartingWith(prefix);
    }

    public List<Country> findByEnding(String suffix){
        return repository.findByNameEndingWith(suffix);
    }

    public Country findByCodeAndName(String code,String name){
        return repository.findByCodeAndName(code,name);
    }

    public List<Country> findByCodeOrName(String code,String name){
        return repository.findByCodeOrName(code,name);
    }

}