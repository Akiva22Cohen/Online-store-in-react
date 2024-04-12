import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
    return (
        <div
            style={{ height: '100vh' }}
            className="d-flex flex-column justify-content-between"
        >
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;