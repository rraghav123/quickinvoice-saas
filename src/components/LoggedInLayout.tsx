
import { Outlet } from "react-router";
import Header from "./common/Header";

function LoggedInLayout() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Outlet />
        </div>
    )
}

export default LoggedInLayout;