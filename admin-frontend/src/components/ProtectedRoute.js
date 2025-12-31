import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // Skipping auth check for Netlify deployment without backend
    // const authToken = localStorage.getItem("auth_token");

    // if (!authToken) {
    //     return <Navigate to="/login" />;
    // }

    return children;
};

export default ProtectedRoute;