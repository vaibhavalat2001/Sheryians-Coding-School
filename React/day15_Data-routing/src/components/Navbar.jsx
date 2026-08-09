import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-amber-400 p-6 flex justify-between items-center">
      <h1>Logo</h1>
      <div className="flex gap-4"> 
        <NavLink to={"/"} className="cursor-pointer font-semibold active:scale-90">Home</NavLink>
        <NavLink to={"/about"} className="cursor-pointer font-semibold active:scale-90">About</NavLink>
        <NavLink to={"/services"} className="cursor-pointer font-semibold active:scale-90">Services</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
