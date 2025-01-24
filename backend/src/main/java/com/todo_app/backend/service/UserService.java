package com.todo_app.backend.service;


import com.todo_app.backend.dto.UserLoginDto;
import com.todo_app.backend.dto.UserRegisterDto;
import com.todo_app.backend.entity.User;
import com.todo_app.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
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

    public Optional<User> authenticateUser(UserLoginDto userLoginDto){
        Optional<User> user = userRepository.findByEmail(userLoginDto.getEmail());
        if(user.isPresent() && passwordEncoder.matches(userLoginDto.getPassword(), user.get().getPassword())){
            return user;
        }
        return Optional.empty();
    }
}
