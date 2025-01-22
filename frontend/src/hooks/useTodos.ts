import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { SortDirection, Todo } from "../lib/types";

const fetchTodos = async (
    direction: SortDirection = "ASC",
    page: number = 0
) => {
    console.log("get");
    const response = await axios.get(
        `http://localhost:8080/api/todos?sort=${direction}&page=${page}`
    );
    console.log(response.data);
    return response.data;
};

const postTodo = async (text: string) => {
    const response = await axios.post("http://localhost:8080/api/todos", {
        text: text,
        completed: false,
    });
    return response.data;
};

const deleteTodo = async (id: number) => {
    const response = await axios.delete(
        `http://localhost:8080/api/todos/${id}`
    );
    return response.data;
};

const updateTodo = async (id: number) => {
    const response = await axios.put(`http://localhost:8080/api/todos/${id}`);
    console.log(response.data);
    return response.data;
};

export const useTodos = (
    sortDirection: SortDirection = "ASC",
    page: number = 0
) => {
    const queryClient = useQueryClient();

    const { data, error, isPending } = useQuery<Todo[], Error>({
        queryKey: ["todos", sortDirection, page],
        queryFn: () => fetchTodos(sortDirection, page),
        staleTime: 5 * 60 * 1000,
    });

    const todoAdd = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    const todoDelete = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    const todoUpdate = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    return { data, error, isPending, todoAdd, todoDelete, todoUpdate };
};
