package net.javaguides.service;



import net.javaguides.model.Country;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    private List<Country> countries = new ArrayList<>();

    public CountryService() {
        countries.add(new Country("IN", "India"));
        countries.add(new Country("US", "United States"));
        countries.add(new Country("UK", "United Kingdom"));
    }

    // GET ALL
    public List<Country> getAllCountries() {
        return countries;
    }

    // GET BY CODE
    public Country getCountryByCode(String code) {
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }

    // ADD COUNTRY
    public Country addCountry(Country country) {
        countries.add(country);
        return country;
    }

    // UPDATE COUNTRY
    public Country updateCountry(String code, Country updated) {
        for (Country c : countries) {
            if (c.getCode().equalsIgnoreCase(code)) {
                c.setName(updated.getName());
                return c;
            }
        }
        return null;
    }

    // DELETE COUNTRY
    public void deleteCountry(String code) {
        countries.removeIf(c -> c.getCode().equalsIgnoreCase(code));
    }
}