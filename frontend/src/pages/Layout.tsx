import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
    return (
        <div className="h-5/6 w-2/3 flex items-center flex-col justify-center">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
