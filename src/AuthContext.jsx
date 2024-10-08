import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem("jwtToken");
            const userData = localStorage.getItem("userData");
            if (token && userData) {
                setUser(JSON.parse(userData));
            }
            setLoading(false);
        };

        checkUser();
    }, []);

    const login = (token, userData) => {
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userData");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
    