package net.javaguides.controller;


import net.javaguides.model.Country;
import net.javaguides.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CountryController {

    @Autowired
    private CountryService service;

    // GET ALL COUNTRIES
    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        return service.getAllCountries();
    }

    // GET COUNTRY BY CODE
    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {
        return service.getCountryByCode(code);
    }

    // ADD COUNTRY
    @PostMapping("/country")
    public Country addCountry(@RequestBody Country country) {
        return service.addCountry(country);
    }

    // UPDATE COUNTRY
    @PutMapping("/country/{code}")
    public Country updateCountry(@PathVariable String code,
                                 @RequestBody Country country) {
        return service.updateCountry(code, country);
    }

    // DELETE COUNTRY
    @DeleteMapping("/country/{code}")
    public void deleteCountry(@PathVariable String code) {
        service.deleteCountry(code);
    }
}