import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
    return (
        <button
            {...props}
            className={clsx(
                "font-montserrat flex items-center justify-center rounded h-12 px-4 w-64 text-xl bg-neutral-700 text-white shadow hover:bg-neutral-900 hover:shadow-md transition-all duration-200 active:bg-gray-700 active:scale-95",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
