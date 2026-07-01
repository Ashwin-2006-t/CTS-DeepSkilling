package net.javaguides.service;

import net.javaguides.util.JwtUtil;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

    public String generateToken(String username) {
        return JwtUtil.generateToken(username);
    }
}