import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";
import { TextAlignJustify } from "lucide-react";

const Navbar = () => {
  const { setLoggedInUser } = useContext(Auth);
  return (
    <div className="flex h-[93vh] lg:h-full p-4 py-6 flex-col justify-between border-r border-zinc-300">
      <div className="flex flex-col gap-18">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold ">E-COMM</h1>
        </div>
        <div className="flex flex-col gap-6 pl-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b border-gray-900 font-semibold"
                : "border-b border-gray-400"
            }
            end
            to={"/main"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b border-gray-900 font-semibold"
                : "border-b border-gray-400"
            }
            end
            to={"/main/user"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b border-gray-900 font-semibold"
                : "border-b border-gray-400"
            }
            end
            to={"/main/product"}
          >
            Products
          </NavLink>
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          toast.warning("User Logged Out");
          setLoggedInUser(null);
        }}
        className="border transition-all  text-white py-2 duration-300 rounded-xl border-red-400 cursor-pointer bg-red-500 capitalize active:bg-red-300 active:scale-90 font-bold"
      >
        logOut
      </button>
    </div>
  );
};

export default Navbar;
