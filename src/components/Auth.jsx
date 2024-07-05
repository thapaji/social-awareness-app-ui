import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const Auth = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  const location = useLocation();
  return user?._id ? children : <Navigate to="/" state={{ from: location }} replace />;
};
