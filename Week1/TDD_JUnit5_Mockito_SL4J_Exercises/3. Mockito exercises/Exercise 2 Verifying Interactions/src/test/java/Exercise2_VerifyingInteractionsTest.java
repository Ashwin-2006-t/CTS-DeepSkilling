import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import net.javaguides.model.Country;
import net.javaguides.repository.CountryRepository;
import net.javaguides.service.CountryServiceImpl;
import org.junit.jupiter.api.Test;

public class Exercise2_VerifyingInteractionsTest {

    @Test
    public void testVerifyInteraction() {

        // 1. Create mock
        CountryRepository repository = mock(CountryRepository.class);

        // 2. Inject mock
        CountryServiceImpl service = new CountryServiceImpl(repository);

        // 3. Stub data
        Country country = new Country(1, "India", "IN");
        when(repository.findById(1)).thenReturn(country);

        // 4. Call service method
        Country result = service.getCountryById(1);

        // 5. VERIFY interaction (MAIN PART OF EXERCISE 2)
        verify(repository).findById(1);

        // optional: check result
        assertEquals("India", result.getName());
    }
}