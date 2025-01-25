package com.todo_app.backend.utility;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtTokenUtil {

    @Value("${spring.security.jwt.secret}")
    private String secret;

    @Value("${spring.security.jwt.access-expiration-time}")
    private long accessTokenExpirationTime;

    @Value("${spring.security.jwt.refresh-expiration-time}")
    private long refreshTokenExpirationTime;


    public String generateAccessToken(String email){
        return Jwts.builder().subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis()+accessTokenExpirationTime))
                .signWith(getSignInKey())
                .compact();
    }

    public String generateRefreshToken(String email){
        return Jwts.builder().subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis()+refreshTokenExpirationTime))
                .signWith(getSignInKey())
                .compact();
    }

    public boolean isTokenExpired(String token){
        Claims claims = extractClaims(token);
        return claims.getExpiration().before(new Date());
    }

    private SecretKey getSignInKey(){
        return Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }
    public Claims extractClaims(String token) {
        return Jwts.parser().verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
