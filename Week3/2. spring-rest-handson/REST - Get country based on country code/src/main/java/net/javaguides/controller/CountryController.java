package net.javaguides.controller;

import net.javaguides.entity.Country;
import net.javaguides.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    // GET all countries
    @GetMapping
    public List<Country> getAll() {
        return service.getAllCountries();
    }

    // 🔥 GET country by code
    @GetMapping("/{code}")
    public Country getByCode(@PathVariable String code) {
        return service.getCountryByCode(code);
    }

    // POST add country
    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return service.addCountry(country);
    }
}