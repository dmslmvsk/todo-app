import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input
            {...props}
            className={clsx(
                "font-montserrat rounded h-12 px-4 w-64 text-lg bg-white text-neutral-700 shadow focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-transparent transition-all duration-200",
                "placeholder-neutral-400",
                "hover:border-neutral-400",
                className
            )}
        />
    );
};

export default Input;
