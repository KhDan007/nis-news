// AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserProfile = async () => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/writers/profile",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
                localStorage.removeItem("jwtToken");
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const login = (token) => {
        localStorage.setItem("jwtToken", token);
        fetchUserProfile();
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, login, logout, loading, fetchUserProfile }}
        >
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
