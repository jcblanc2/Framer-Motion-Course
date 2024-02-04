import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Layout = () => {
    return (
        <div
            className="relative flex flex-col justify-between w-full min-h-screen bg-third "
        >
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout