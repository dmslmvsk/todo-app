import clsx from "clsx";
import React from "react";
import { IoClose } from "react-icons/io5";

interface TodoItemProps {
    text: string;
    id: number;
    completed: boolean;
    onDelete: (id: number) => void;
    onComplete: (id: number) => void;
    index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
    text,
    onDelete,
    id,
    completed,
    onComplete,
    index,
}) => {
    return (
        <div
            className={clsx(
                "flex flex-row items-center px-6 justify-between rounded w-full h-12 shadow hover:cursor-pointer transition-all duration-150",
                completed ? "bg-neutral-300" : "bg-white hover:bg-yellow-50 "
            )}
            onClick={() => onComplete(id)}
        >
            <div
                className={clsx(
                    "w-10/12 flex flex-row items-baseline justify-start gap-2",
                    completed ? "text-neutral-500" : "text-neutral-700"
                )}
            >
                <span className="text-sm">{index}.</span>
                <span
                    className={clsx(
                        "text-xl font-poppins tracking-wide",
                        completed ? "line-through" : ""
                    )}
                >
                    {text}
                </span>
            </div>

            <IoClose
                className="w-8 h-8 text-neutral-700 hover:cursor-pointer hover:bg-red-500 px-1 py-1 rounded-full transition-all duration-200"
                onClick={() => onDelete(id)}
            />
        </div>
    );
};

export default TodoItem;
