package net.javaguides;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {

        // 1. Load Spring XML container
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // 2. Get bean from Spring container
        Country country = (Country) context.getBean("country");

        // 3. Use object
        country.display();

        System.out.println("Spring XML Config Loaded Successfully");
    }
}