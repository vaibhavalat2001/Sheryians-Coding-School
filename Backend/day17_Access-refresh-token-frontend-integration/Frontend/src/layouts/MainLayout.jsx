import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-black h-screen text-white">
      <div className="flex justify-between px-8 py-3">
        <NavLink to={"/"}>Register</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
