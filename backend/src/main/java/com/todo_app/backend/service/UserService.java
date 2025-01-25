package com.todo_app.backend.service;


import com.todo_app.backend.dto.UserLoginDto;
import com.todo_app.backend.dto.UserRegisterDto;
import com.todo_app.backend.entity.User;
import com.todo_app.backend.repository.UserRepository;
import com.todo_app.backend.utility.JwtTokenUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenUtil jwtTokenUtil;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder,JwtTokenUtil jwtTokenUtil){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    public User registerUser(UserRegisterDto userRegisterDto){
        if (userRepository.existsByEmail(userRegisterDto.getEmail())){
            throw new RuntimeException("Email is already in use");
        }
        if(userRepository.existsByUsername(userRegisterDto.getUsername())){
            throw new RuntimeException("Username is already in use");
        }
        User user = new User();
        user.setUsername(userRegisterDto.getUsername());
        user.setEmail(userRegisterDto.getEmail());
        user.setPassword(passwordEncoder.encode(userRegisterDto.getPassword()));

        return userRepository.save(user);
    }

    public Map<String,String> authenticateUser(UserLoginDto userLoginDto){
        Optional<User> user = userRepository.findByEmail(userLoginDto.getEmail());
        if(user.isPresent() && passwordEncoder.matches(userLoginDto.getPassword(),user.get().getPassword())){
            String accessToken = jwtTokenUtil.generateAccessToken(userLoginDto.getEmail());
            String refreshToken = jwtTokenUtil.generateRefreshToken(userLoginDto.getEmail());

            Map<String,String> tokens = new HashMap<>();
            tokens.put("accessToken",accessToken);
            tokens.put("refreshToken",refreshToken);
            return tokens;
        }
        else{
            throw new RuntimeException("Invalid credentials");
        }
    }

    public String refreshAccessToken(String refreshToken){
        if(jwtTokenUtil.isTokenExpired(refreshToken)){
            throw new RuntimeException("Refresh token has expired");
        }

        Claims claims = jwtTokenUtil.extractClaims(refreshToken);
        String email = claims.getSubject();
        return jwtTokenUtil.generateRefreshToken(email);
    }


}
