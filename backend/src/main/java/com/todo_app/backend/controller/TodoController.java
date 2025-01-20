package com.todo_app.backend.controller;


import com.todo_app.backend.model.Todo;
import com.todo_app.backend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    @Autowired
    public TodoController (TodoService todoService){
        this.todoService = todoService;
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo){
        return todoService.createTodo(todo);
    }

    @GetMapping
    public List<Todo> getAllTodos(){
        return todoService.getAllTodos();
    }

    @GetMapping("/{id}")
    public Optional<Todo> getTodoById(@PathVariable Long id){
        return todoService.getTodoById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable Long id){
        todoService.deleteTodoById(id);
    }
}
