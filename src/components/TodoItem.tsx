import clsx from "clsx";
import React from "react";
import { IoClose } from "react-icons/io5";

interface TodoItemProps {
    text: string;
    id: number;
    completed: boolean;
    onDelete: (id: number) => void;
    onComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
    text,
    onDelete,
    id,
    completed,
    onComplete,
}) => {
    return (
        <div
            className={clsx(
                "flex flex-row items-center px-6 py-2 justify-between rounded w-1/3 h-16",
                completed ? "bg-zinc-300" : "bg-white"
            )}
        >
            <span
                className={clsx(
                    "hover:cursor-pointer",
                    completed ? "line-through text-gray-700" : "text-black"
                )}
                onClick={() => onComplete(id)}
            >
                {text}
            </span>
            <IoClose
                className="w-10 h-10 hover:cursor-pointer hover:bg-slate-100 px-1 py-1 rounded-full transition-all duration-200"
                onClick={() => onDelete(id)}
            />
        </div>
    );
};

export default TodoItem;
