import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import TodoListPage from "./pages/TodoListPage";
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className=" h-5/6 w-2/3 flex items-center flex-col justify-center">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/list/" element={<TodoListPage />} />
                    <Route path="/auth/" element={<AuthPage />} />
                </Routes>
                <Footer />
            </div>
        </QueryClientProvider>
    );
}

export default App;
