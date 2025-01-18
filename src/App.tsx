import TodoList from "./components/TodoList";

const initialTodos = [
    { id: 1, text: "asdsdadsa", completed: false },
    { id: 2, text: "bfdjfjtyty", completed: false },
    { id: 3, text: "bfddsfdsahwehw", completed: false },
    { id: 4, text: "i7yrjthert", completed: false },
];

function App() {
    return (
        <main className="w-full h-full">
            <TodoList items={initialTodos} name="test" />
        </main>
    );
}

export default App;
