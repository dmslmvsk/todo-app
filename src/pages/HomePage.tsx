import React from "react";
import SideBar from "../components/SideBar";
import TodoList from "../components/TodoList";

const initialTodos = [
    { id: 1, text: "Write code", completed: false },
    { id: 2, text: "Learn language", completed: false },
    { id: 3, text: "Eat meet", completed: false },
    { id: 4, text: "Workout", completed: false },
];

const HomePage = () => {
    return (
        <main className="w-full h-full flex flex-row items-start justify-start bg-gradient-to-r from-neutral-50 to-neutral-200  rounded-b shadow-sm">
            <TodoList items={initialTodos} name="My Todos" />
            <SideBar />
        </main>
    );
};

export default HomePage;
