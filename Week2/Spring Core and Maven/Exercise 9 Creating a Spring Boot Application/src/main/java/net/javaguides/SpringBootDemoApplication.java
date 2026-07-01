package net.javaguides;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


//Internally Spring Boot does:
//
//Create Spring Container
//Load Configuration
//Scan Components
//Create Beans
//Start Application
//Perform Auto Configuration
@SpringBootApplication
public class SpringBootDemoApplication {

    public static void main(String[] args) {

        SpringApplication.run(
                SpringBootDemoApplication.class,
                args
        );

        System.out.println("Spring Boot Application Started");
    }
}