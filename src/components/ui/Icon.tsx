import clsx from "clsx";
import React from "react";

interface IconProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    clickable?: boolean;
}

const Icon: React.FC<IconProps> = ({
    className = "",
    onClick,
    children,
    clickable = false,
}) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                "w-20 h-20 bg-transparent flex items-center justify-center",
                className,
                clickable ? "hover:cursor-pointer" : ""
            )}
        >
            <div className="w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default Icon;
