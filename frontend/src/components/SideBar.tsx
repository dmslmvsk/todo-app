import React from "react";
import AddTodoForm from "./forms/AddTodoForm";
import Button from "./ui/Button";
import { Link } from "react-router";

interface SideBarProps {
    handleTodoAdd: (text: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ handleTodoAdd }) => {
    return (
        <div className="flex flex-col items-center justify-between h-full bg-neutral-300 w-4/12 py-10 rounded-br">
            <AddTodoForm onFormSubmit={handleTodoAdd} />
            <div className="flex flex-col items-center justify-center gap-6">
                <Link to={"/auth?type=sign-in"}>
                    <Button>Sign In</Button>
                </Link>
                <Link to={"/auth?type=sign-up"}>
                    <Button>Sign Up</Button>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
