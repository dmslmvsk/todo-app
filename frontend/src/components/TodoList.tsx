import React from "react";
import { SortDirection, Todo } from "../lib/types";
import TodoItem from "./TodoItem";
import Button from "./ui/Button";
import Pagination from "./Pagination";
import { useTodos } from "../hooks/useTodos";

interface TodoListProps {
    name: string;
    items: Todo[];
    handleTodoDelete: (id: number) => void;
    handleTodoComplete: (id: number) => void;
    toggleSortDirection: (newDirection: SortDirection) => void;
    sortDirection: SortDirection;
    currentPage: number;
    changePage: (newPage: number) => void;
    handleClear: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
    name,
    items,
    handleTodoDelete,
    handleTodoComplete,
    sortDirection,
    toggleSortDirection,
    currentPage,
    changePage,
    handleClear,
}) => {
    const { data, error, isPending } = useTodos();
    const completed = data?.content.filter(
        (item) => item.completed !== false
    ).length;
    return (
        <div className="flex flex-col gap-6 items-center justify-center px-10 py-10 w-8/12">
            <div className="flex flex-row items-center justify-between w-full">
                <h1 className="font-poppins text-5xl font-bold text-neutral-700 underline underline-offset-4">
                    {name}
                </h1>
                <Button
                    className="w-32 text-base bg-red-500 hover:bg-red-600"
                    onClick={handleClear}
                >
                    Clear
                </Button>
                <Button
                    className="w-32 text-base"
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

            <div className="w-full flex flex-col gap-4 px-4 h-96">
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
            <div className="flex flex-row items-center justify-between w-full">
                <span className="font-montserrat text-xl text-neutral-700">
                    {isPending
                        ? "Loading"
                        : error
                        ? "error"
                        : `${completed} / ${data?.content.length} completed`}
                </span>
                <Pagination currentPage={currentPage} changePage={changePage} />
            </div>
        </div>
    );
};

export default TodoList;
