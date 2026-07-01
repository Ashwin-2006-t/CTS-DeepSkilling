package net.javaguides.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    public boolean validateUser(String username, String password) {

        // Dummy check (real project → DB)
        return "admin".equals(username) && "admin".equals(password);
    }
}