import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className=" h-5/6 w-2/3 flex items-center flex-col justify-center">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
