import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout;