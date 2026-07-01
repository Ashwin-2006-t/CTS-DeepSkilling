package net.javaguides;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;

@Configuration
class AppConfig {
}

public class Main {

    public static void main(String[] args) {

        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);

        System.out.println("Maven downloaded Spring successfully");
        System.out.println("Context Created: " +
                context.getClass().getSimpleName());

        context.close();
    }
}