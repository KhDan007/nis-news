import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";

export const Profile = () => {
    const { user, loading } = useAuth();
    
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>No user data available</div>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>This is the profile page.</p>
            <p>Username: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};
