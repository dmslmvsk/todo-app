import React from "react";
import { Todo } from "../lib/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    name: string;
    items: Todo[];
    handleTodoDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
    name,
    items,
    handleTodoDelete,
}) => {
    const [todos, setTodos] = React.useState(items);

    const handleTodoComplete = (id: number) => {
        setTodos(
            todos.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };
    return (
        <div className="flex flex-col gap-6 items-start justify-center px-10 py-10 w-8/12">
            <h1 className="font-poppins text-5xl font-bold text-neutral-700 underline underline-offset-4">
                {name}
            </h1>
            <div className="w-full flex flex-col gap-4 px-4">
                {items.map((item, index) => (
                    <TodoItem
                        id={item.id}
                        index={index + 1}
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
