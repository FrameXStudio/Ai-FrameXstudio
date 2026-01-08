import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ Not logged in OR not admin
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  // ✅ Admin allowed
  return children;
}
