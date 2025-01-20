package com.todo_app.backend.service;


import com.todo_app.backend.model.Todo;
import com.todo_app.backend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository){
        this.todoRepository = todoRepository;
    }

    public Todo createTodo(Todo todo){
        return todoRepository.save(todo);
    }

    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(Long id){
        return todoRepository.findById(id);
    }

    public void deleteTodoById(Long id){
        todoRepository.deleteById(id);
    }
}
