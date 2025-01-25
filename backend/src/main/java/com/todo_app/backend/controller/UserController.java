package com.todo_app.backend.controller;

import com.todo_app.backend.dto.UserLoginDto;
import com.todo_app.backend.dto.UserRegisterDto;
import com.todo_app.backend.entity.User;
import com.todo_app.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/api/user")

public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody UserRegisterDto userRegisterDto){
        return userService.registerUser(userRegisterDto);
    }

    @PostMapping("/login")
    public Map<String, String> authenticateUser(@RequestBody UserLoginDto userLoginDto){
        return userService.authenticateUser(userLoginDto);
    }

    @PostMapping("/refresh")
    public Map<String,String> refreshToken(@RequestBody Map<String,String> request){
        String refreshToken = request.get("refreshToken");
        String newAccessToken = userService.refreshAccessToken(refreshToken);
        return Map.of("accessToken",newAccessToken);
    }
}
