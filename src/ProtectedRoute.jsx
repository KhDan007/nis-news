import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        // You can return a loading spinner or component here
        return <div>Loading...</div>;
    }

    if (!user) {
        // User is not authenticated
        return <Navigate to="/login" replace />;
    }

    // User is authenticated, render the child route
    return <Outlet />;
};