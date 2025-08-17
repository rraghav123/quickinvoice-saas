import {
  RouterProvider,
} from "react-router";
import { router } from "./Routes";
import {AuthProvider} from "./Context/AuthContext.tsx";


export default function App() {

  return (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  )
}