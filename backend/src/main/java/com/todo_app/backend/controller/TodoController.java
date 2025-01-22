package com.todo_app.backend.controller;


import com.todo_app.backend.entity.Todo;
import com.todo_app.backend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173")
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


    @GetMapping("/{id}")
    public Optional<Todo> getTodoById(@PathVariable Long id){
        return todoService.getTodoById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable Long id){
        todoService.deleteTodoById(id);
    }

    @PutMapping("/{id}")
    public Todo updateTodoStatus(@PathVariable Long id){
        return todoService.updateTodoStatusById(id);
    }

    @GetMapping("/sorted")
    public List<Todo> getAllTodosSortedByDate(@RequestParam(defaultValue = "ASC") String direction){
        Sort.Direction sortDirection = Sort.Direction.fromString(direction);
        return todoService.getAllTodosSortedByDate(sortDirection);
    }

    @GetMapping
    public List<Todo> getTodos(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "ASC") String sort
    ){
        long totalCount = todoService.getTotalCount();

        Sort.Direction sortDirection = Sort.Direction.fromString(sort);

        Page<Todo> currentPage = todoService.getTodos(PageRequest.of(page,6,Sort.by(sortDirection,"createdAt")));
        return currentPage.getContent();
    }
}
