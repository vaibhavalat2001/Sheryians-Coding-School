import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { Navigate, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const { loggedInUser } = useContext(Auth);
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between max-sm:px-4 px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 shadow-lg">
      <div>
        <img
          className="w-20 h-18 max-sm:w-16 max-sm:h-16 object-cover object-top rounded-full"
          src="https://cdn.vectorstock.com/i/1000v/27/09/online-shop-logo-template-icon-vector-30562709.jpg"
          alt=""
        />
      </div>
      <div className="flex max-sm:gap-4 gap-6">
        <NavLink
          className={({ isActive }) =>
            `active:scale-90 hover:text-white transition-all duration-300 font-semibold ${isActive ? "text-white" : "text-black"}`
          }
          end
          to={"."}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `active:scale-90 hover:text-white transition-all duration-300 font-semibold ${isActive ? "text-white" : "text-black"}`
          }
          end
          to={"shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `active:scale-90 hover:text-white transition-all duration-300 font-semibold ${isActive ? "text-white" : "text-black"}`
          }
          end
          to={"contact"}
        >
          Contact
        </NavLink>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          navigate("/");
        }}
        className="active:scale-90 max-sm:px-2 max-[400px]:text-sm text-lg text-white font-semibold bg-red-500 rounded px-4 py-1"
      >
        {loggedInUser?.name?.trim()?.split(" ")?.[0] || "Guest"}
      </button>
    </div>
  );
};

export default Navbar;
