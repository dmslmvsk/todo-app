package com.todo_app.backend.service;


import com.todo_app.backend.entity.Todo;
import com.todo_app.backend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    public List<Todo> getAllTodosSortedByDate(Sort.Direction direction) {
        return todoRepository.findAll(Sort.by(direction, "createdAt"));
    }

    public long getTotalCount() {
        return todoRepository.count();
    }

    public Todo updateTodoStatusById(Long id){

        Optional<Todo> existingTodo = todoRepository.findById(id);
        if(existingTodo.isPresent()){
            Todo updatedTodo  =  existingTodo.get();
            updatedTodo.setId(updatedTodo.getId());
            updatedTodo.setCompleted(!updatedTodo.isCompleted());
            updatedTodo.setText(updatedTodo.getText());
            return todoRepository.save(updatedTodo);
        }
        else {
            throw new RuntimeException("Todo with id " + id + " not found");
        }
    }

    public Page<Todo> getTodos(Pageable pageable) {
        return todoRepository.findAll(pageable);
    }
}
