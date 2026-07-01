package calculator;

import net.javaguides.calculator.Calculator;
import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
        System.out.println("========== SETUP START ==========");
        System.out.println("Calculator object created");
        System.out.println("========== SETUP END ==========\n");
    }

    @AfterEach
    void tearDown() {
        System.out.println("========== CLEANUP START ==========");
        calculator = null;
        System.out.println("Calculator object destroyed");
        System.out.println("========== CLEANUP END ==========\n");
    }

    @Test
    void testAddition() {

        System.out.println("----- TEST: ADDITION START -----");

        // ARRANGE
        int a = 10;
        int b = 5;
        System.out.println("Inputs: a = " + a + ", b = " + b);

        // ACT
        int result = calculator.add(a, b);
        System.out.println("Actual Result = " + result);

        // ASSERT
        int expected = 15;
        System.out.println("Expected Result = " + expected);

        assertEquals(expected, result);

        System.out.println("----- TEST: ADDITION END -----\n");
    }

    @Test
    void testSubtraction() {

        System.out.println("----- TEST: SUBTRACTION START -----");

        // ARRANGE
        int a = 10;
        int b = 5;
        System.out.println("Inputs: a = " + a + ", b = " + b);

        // ACT
        int result = calculator.subtract(a, b);
        System.out.println("Actual Result = " + result);

        // ASSERT
        int expected = 5;
        System.out.println("Expected Result = " + expected);

        assertEquals(expected, result);

        System.out.println("----- TEST: SUBTRACTION END -----\n");
    }
}