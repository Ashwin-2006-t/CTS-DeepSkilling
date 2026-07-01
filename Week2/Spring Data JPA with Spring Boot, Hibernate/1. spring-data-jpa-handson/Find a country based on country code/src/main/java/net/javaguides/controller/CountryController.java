package net.javaguides.controller;


import net.javaguides.entity.Country;
import net.javaguides.service.CountryService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    @GetMapping("/code/{code}")
    public Country getCountryByCode(@PathVariable String code) {

        return service.getCountryByCode(code);

    }

}