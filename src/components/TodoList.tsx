import React from "react";
import { Todo } from "../lib/types";
import TodoItem from "./ui/TodoItem";

interface TodoListProps {
    name: string;
    items: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ name, items }) => {
    const [todos, setTodos] = React.useState(items);
    const handleTodoDelete = (id: number) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    const handleTodoComplete = (id: number) => {
        setTodos(
            todos.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };
    return (
        <div className="flex flex-col gap-6 items-start justify-center w-full bg-slate-400 rounded px-16 py-8">
            <h1 className="font-poppins text-4xl font-bold ">{name}</h1>
            <div className="w-full flex flex-col gap-4">
                {todos.map((item) => (
                    <TodoItem
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        key={item.id}
                        onDelete={handleTodoDelete}
                        onComplete={handleTodoComplete}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
