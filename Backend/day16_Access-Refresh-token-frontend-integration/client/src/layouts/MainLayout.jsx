import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="px-10 py-4 flex justify-between">
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
