import {
    createBrowserRouter,
} from "react-router";

import { ROUTES } from './routes.ts';
import Dashboard from "./Dashboard";
import Clients from "./Clients";
import CreateInvoice from "./CreateInvoice";
import InvoicePreview from "./InvoicePreview";
import LandingPage from "./LandingPage";
import Reports from "./Reports";
import Settings from "./Settings";

import Loader from "./Loader.tsx";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoutes";

const router = createBrowserRouter([{
    Component: PublicRoute,
    children: [
        {
            path: ROUTES.LANDING_PAGE,
            Component: LandingPage,
        }
    ]
}, {
    Component: ProtectedRoute,
    children: [
        {
            path: ROUTES.DASHBOARD,
            Component: Dashboard,
            loader: Loader,
        },
        {
            path: ROUTES.CLIENTS,
            Component: Clients,
            loader: Loader,
        },
        {
            path: ROUTES.CREATE_INVOICE,
            Component: CreateInvoice,
            loader: Loader,
        },
        {
            path: ROUTES.INVOICE_PREVIEW,
            Component: InvoicePreview,
            loader: Loader,
        },
        {
            path: ROUTES.REPORTS,
            Component: Reports,
            loader: Loader,
        },
        {
            path: ROUTES.SETTINGS,
            Component: Settings,
            loader: Loader,
        }
    ]
}])

export {
    router
}