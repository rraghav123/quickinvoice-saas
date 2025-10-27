import {
  RouterProvider,
} from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { router } from "./Routes";

import {AuthProvider} from "./Context/AuthContext.tsx";
import { ModalProvider } from "./Context/ModalContext.tsx";


export default function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
      <GoogleOAuthProvider clientId={clientId}>
          <AuthProvider>
              <ModalProvider>
                    <RouterProvider router={router} />
              </ModalProvider>
          </AuthProvider>
      </GoogleOAuthProvider>
  )
}