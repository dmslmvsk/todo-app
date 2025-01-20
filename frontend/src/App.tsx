import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className=" h-5/6 w-2/3 flex items-center flex-col justify-center">
                <Header />
                <HomePage />
                <Footer />
            </div>
        </QueryClientProvider>
    );
}

export default App;
