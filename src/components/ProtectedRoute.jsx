import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Retrieve the token from localStorage

  if (!token) {
    // If no token, redirect to the home page (or login page)
    return <Navigate to="/" />;
  }

  return children; // If a token exists, allow access to the protected route
};

export default ProtectedRoute;
