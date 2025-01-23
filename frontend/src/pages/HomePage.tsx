import SideBar from "../components/SideBar";
import TodoList from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";
import { useSearchParams } from "react-router";
import { SortDirection } from "../lib/types";

const HomePage = () => {
    console.log("rerender");
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 0;
    const sortDirection = (searchParams.get("sort") || "ASC") as SortDirection;

    const toggleSortDirection = (newDirection: SortDirection) => {
        setSearchParams({ sort: newDirection });
    };

    const changePage = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    const {
        data,
        error,
        isPending,
        todoAdd,
        todoDelete,
        todoUpdate,
        clearTodos,
    } = useTodos(sortDirection as SortDirection, page);

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    return (
        <main className="w-full h-full flex flex-row items-start justify-start bg-gradient-to-r from-neutral-50 to-neutral-200  rounded-b shadow-sm">
            <TodoList
                items={data?.content || []}
                name="My Todos"
                handleTodoDelete={todoDelete.mutate}
                handleTodoComplete={todoUpdate.mutate}
                sortDirection={sortDirection}
                toggleSortDirection={toggleSortDirection}
                currentPage={page}
                changePage={changePage}
                handleClear={clearTodos.mutate}
            />
            <SideBar handleTodoAdd={todoAdd.mutate} />
        </main>
    );
};

export default HomePage;
