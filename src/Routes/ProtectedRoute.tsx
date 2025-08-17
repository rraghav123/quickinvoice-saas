import {useAuthContext} from "../Context/AuthContext.tsx";
import {Navigate} from "react-router";
import {ROUTES} from "./routes.ts";
import LoggedInLayout from "../components/LoggedInLayout.tsx";

function ProtectedRoute() {
    const {user} = useAuthContext();

    if(!user) {
        return <Navigate to={ROUTES.LANDING_PAGE} />
    }

    return <LoggedInLayout />
}

export default ProtectedRoute