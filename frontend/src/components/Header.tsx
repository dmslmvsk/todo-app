import React from "react";

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between w-full h-20 rounded-t py-4 px-6 bg-neutral-700">
            <div className="flex flex-row gap-4 items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-red-500"></div>
                <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                <div className="w-5 h-5 rounded-full bg-green-500"></div>
            </div>
        </header>
    );
};

export default Header;
