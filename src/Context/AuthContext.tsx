import {createContext, useContext, useMemo, useCallback, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(true);
    const login = useCallback((userData) => setUser(userData), []);
    const logout = useCallback(() => setUser(null), []);

   const handleSuccess = useCallback(async (credentialResponse) => {
       const token = credentialResponse.credential;
       const userInfo = jwtDecode(token);
       console.log("Google User Info:", userInfo);

       await axios.post("http://localhost:5050/api/auth/google", {
           token,
       });
   }, [])

    const handleError = useCallback(() => {
        console.log("Login Failed");
    }, []);

    const value = useMemo(() => {
        return {
            login,
            logout,
            user,
            handleSuccess,
            handleError
        }
    }, [handleError, handleSuccess, login, logout, user])

    return (
        <AuthContext.Provider value={value}>
            <button onClick={() => {
                axios.get("http://localhost:5050/api/profile", {
                    withCredentials: true
                });
            }}>lkasdjlfkasdf</button>
            {children}
        </AuthContext.Provider>
    )
}

function useAuthContext() {
    return useContext(AuthContext);
}

export {
    useAuthContext,
    AuthProvider
}
