package net.javaguides.mockito;

import net.javaguides.model.Country;
import net.javaguides.repository.CountryRepository;
import net.javaguides.service.CountryService;
import net.javaguides.service.CountryServiceImpl;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class Exercise1_MockingAndStubbingTest {

    @Test
    void testMockingAndStubbing() {

        // MOCK
        CountryRepository repository = mock(CountryRepository.class);

        CountryService service = new CountryServiceImpl(repository);

        // STUB
        Country country = new Country(1, "India", "IN");

        when(repository.findById(1)).thenReturn(country);

        // ACT
        Country result = service.getCountryById(1);

        // ASSERT
        assertEquals("India", result.getName());
        assertEquals("IN", result.getCode());
    }
}