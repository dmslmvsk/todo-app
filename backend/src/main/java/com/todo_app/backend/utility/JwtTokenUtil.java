package com.todo_app.backend.utility;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtTokenUtil {

    @Value("${spring.secret}")
    private String secret;
}
