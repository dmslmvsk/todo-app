import clsx from "clsx";
import React from "react";

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    className = "",
    disabled = false,
    onClick,
    children,
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                "font-montserrat font-semibold tracking-wide flex items-center justify-center rounded h-10 py-6 w-48 px-6 text-xl bg-orange-500 text-white shadow hover:bg-orange-600 hover:shadow-md transition-all duration-200",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
