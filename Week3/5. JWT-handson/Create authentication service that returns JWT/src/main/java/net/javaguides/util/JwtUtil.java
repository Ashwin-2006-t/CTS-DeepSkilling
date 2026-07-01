package net.javaguides.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtUtil {

//    private static final String SECRET = "mysecretkey";// 64 bit key not supported by HS256 (weak secret key)

    private static final SecretKey SECRET = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static String generateToken(String username) {

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 10)) // 10 mins
                .signWith(SignatureAlgorithm.HS256, SECRET)
                .compact();
    }
}