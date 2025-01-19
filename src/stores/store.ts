import { create } from "zustand";
import { Todo } from "../lib/types";

interface TodoStore{
	todos : [],
}


const useStore = create((set) => {
	todos: Todo[];
});
