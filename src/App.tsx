import {
  RouterProvider,
} from "react-router";
import { router } from "./Routes";
import {AuthProvider} from "./Context/AuthContext.tsx";
import { ModalProvider } from "./Context/ModalContext.tsx";


export default function App() {

  return (
      <AuthProvider>
          <ModalProvider>
                <RouterProvider router={router} />
          </ModalProvider>
      </AuthProvider>
  )
}