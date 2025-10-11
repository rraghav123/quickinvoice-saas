import {createContext, useContext, useMemo, useCallback, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(true);
    const login = useCallback((userData) => setUser(userData), []);
    const logout = useCallback(() => setUser(null), []);

    const value = useMemo(() => {
        return {
            login,
            logout,
            user,
        }
    }, [login, logout, user])

    return (
        <AuthContext.Provider value={value}>
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
