import React from "react";
import AddTodoForm from "./forms/AddTodoForm";

interface SideBarProps {
    handleTodoAdd: (text: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ handleTodoAdd }) => {
    return (
        <div className="flex flex-col items-center h-full bg-neutral-300 w-4/12 py-10 rounded-br">
            <AddTodoForm onFormSubmit={handleTodoAdd} />
        </div>
    );
};

export default SideBar;
