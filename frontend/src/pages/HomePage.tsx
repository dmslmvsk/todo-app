import SideBar from "../components/SideBar";
import TodoList from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";

const HomePage = () => {
    const { data, error, isPending, todoAdd, todoDelete } = useTodos();

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    return (
        <main className="w-full h-full flex flex-row items-start justify-start bg-gradient-to-r from-neutral-50 to-neutral-200  rounded-b shadow-sm">
            <TodoList
                items={data || []}
                name="My Todos"
                handleTodoDelete={todoDelete.mutate}
            />
            <SideBar handleTodoAdd={todoAdd.mutate} />
        </main>
    );
};

export default HomePage;
