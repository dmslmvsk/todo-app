import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import TodoListPage from "./pages/TodoListPage";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="list" element={<TodoListPage />} />
                    <Route path="auth" element={<AuthPage />} />
                </Route>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
