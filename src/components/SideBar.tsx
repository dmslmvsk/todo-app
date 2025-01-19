import React from "react";
import AddTodoForm from "./forms/AddTodoForm";

const SideBar = () => {
    return (
        <div className="flex flex-col items-center h-full bg-neutral-300 w-4/12 py-10 rounded-br">
            <AddTodoForm />
        </div>
    );
};

export default SideBar;
