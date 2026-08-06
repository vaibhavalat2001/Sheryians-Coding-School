import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let isAdmin = false;

  // protexted route condition
  if (!isAdmin) {
    alert("You not an admin");
    return <Navigate to={"/"} />;
  }

  return children;

  return <div>hello</div>;
};

export default ProtectedRoute;
