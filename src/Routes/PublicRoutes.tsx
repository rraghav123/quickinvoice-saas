import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../Context/AuthContext.tsx";

function PublicRoute() {
    const { user } = useAuthContext();

    console.log({ user })

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}

export default PublicRoute