import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";

const AuthProtected = () => {
  const { employee, isLoading } = useSelector((store) => store.auth);
  if (isLoading) return <h1>Loading...</h1>;
  if (employee) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default AuthProtected;
