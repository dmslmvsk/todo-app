import React from "react";
import { SortDirection, Todo } from "../lib/types";
import TodoItem from "./TodoItem";
import Button from "./ui/Button";

interface TodoListProps {
    name: string;
    items: Todo[];
    handleTodoDelete: (id: number) => void;
    handleTodoComplete: (id: number) => void;
    toggleSortDirection: (newDirection: SortDirection) => void;
    sortDirection: SortDirection;
}

const TodoList: React.FC<TodoListProps> = ({
    name,
    items,
    handleTodoDelete,
    handleTodoComplete,
    sortDirection,
    toggleSortDirection,
}) => {
    return (
        <div className="flex flex-col gap-6 items-start justify-center px-10 py-10 w-8/12">
            <div className="flex flex-row items-center justify-between w-full">
                <h1 className="font-poppins text-5xl font-bold text-neutral-700 underline underline-offset-4">
                    {name}
                </h1>
                <Button
                    className="w-48"
                    onClick={() =>
                        toggleSortDirection(
                            sortDirection === "ASC" ? "DESC" : "ASC"
                        )
                    }
                >
                    {`Sort by: ${
                        sortDirection === "ASC" ? "Oldest" : "Newest"
                    }`}
                </Button>
            </div>

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
