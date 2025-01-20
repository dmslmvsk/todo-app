import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../lib/types";

const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/api/todos");
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

export const useTodos = () => {
    const queryClient = useQueryClient();

    const { data, error, isPending } = useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
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

    return { data, error, isPending, todoAdd, todoDelete };
};
