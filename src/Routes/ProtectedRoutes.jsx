import React from "react";
import Unauthorized from "../pages/Unauthorized";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ allowedRoles }) => {
const user = {
  id: "64f8a123",
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  role: "Admin",
  permissions: [
    "create_user",
    "delete_user",
    "view_reports"
  ],
  isVerified: true,
  profileImage: "https://example.com/avatar.jpg"
}


  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!allowedRoles.includes(user.role)){
    return <Navigate to="/unauthorized" replace />;}

  return <Outlet />;
};

export default ProtectedRoutes;
