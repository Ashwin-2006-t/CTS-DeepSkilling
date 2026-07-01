package net.javaguides.controller;

import net.javaguides.model.AuthRequest;
import net.javaguides.model.AuthResponse;
import net.javaguides.service.JwtService;
import net.javaguides.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;
    private final JwtService jwtService;

    public AuthController(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {

        if (userService.validateUser(request.getUsername(), request.getPassword())) {
            String token = jwtService.generateToken(request.getUsername());
            return new AuthResponse(token);
        }

        return new AuthResponse("Invalid credentials");
    }
}