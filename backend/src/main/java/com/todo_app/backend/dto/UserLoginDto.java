package com.todo_app.backend.dto;

import lombok.Data;

@Data
public class UserLoginDto {
    private String email;
    private String password;
}
