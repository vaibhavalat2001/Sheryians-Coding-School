import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex p-5 bg-amber-400 justify-between items-center">
      <div>Logo</div>
      <div className="flex font-semibold gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </div>
      <button className="bg-red-500 rounded px-3 py-1">Login</button>
    </div>
  );
};

export default Navbar;
