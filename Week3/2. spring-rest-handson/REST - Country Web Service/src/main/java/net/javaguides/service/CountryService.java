package net.javaguides.service;

import net.javaguides.entity.Country;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CountryService {

    private static List<Country> countries = new ArrayList<>();

    static {
        countries.add(new Country("IN", "India"));
        countries.add(new Country("US", "United States"));
        countries.add(new Country("UK", "United Kingdom"));
    }

    public List<Country> getAllCountries() {
        return countries;
    }

    public Country getCountryByCode(String code) {
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }

    public Country addCountry(Country country) {
        countries.add(country);
        return country;
    }
}