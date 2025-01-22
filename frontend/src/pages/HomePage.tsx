import SideBar from "../components/SideBar";
import TodoList from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";
import { useSearchParams } from "react-router";
import { SortDirection } from "../lib/types";

const HomePage = () => {
    console.log("rerender");
    const [searchParams, setSearchParams] = useSearchParams();
    const sortDirection = (searchParams.get("sort") || "ASC") as SortDirection;

    const toggleSortDirection = (newDirection: SortDirection) => {
        setSearchParams({ sort: newDirection });
    };

    const { data, error, isPending, todoAdd, todoDelete, todoUpdate } =
        useTodos(sortDirection as SortDirection, 0);

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
                handleTodoComplete={todoUpdate.mutate}
                sortDirection={sortDirection}
                toggleSortDirection={toggleSortDirection}
            />
            <SideBar handleTodoAdd={todoAdd.mutate} />
        </main>
    );
};

export default HomePage;
