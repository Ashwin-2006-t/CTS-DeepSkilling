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

    @GetMapping
    public List<Country> getAllCountries() {
        return service.getAllCountries();
    }

    @GetMapping("/{id}")
    public Country getCountryById(@PathVariable Long id) {
        return service.getCountryById(id);
    }

    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return service.saveCountry(country);
    }

    @DeleteMapping("/{id}")
    public String deleteCountry(@PathVariable Long id) {
        service.deleteCountry(id);
        return "Country Deleted Successfully";
    }
}