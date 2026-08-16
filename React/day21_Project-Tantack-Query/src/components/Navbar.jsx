import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { LogOut, ShoppingCart, Menu, X, TableRowsSplit } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {user} = useSelector((store) => store.auth)

  const userName = user?.name || "User";

  const navLinks = [
    {
      name: "Home",
      path: "/main",
      end: true,
    },
    {
      name: "Shop",
      path: "/main/shop",
    },
    {
      name: "About",
      path: "/main/about",
    },
  ];

  const linkStyle = ({ isActive }) =>
    `transition-all duration-300 ${
      isActive
        ? "text-purple-400 font-semibold"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Navbar */}
        <div className="h-[72px] flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/main"
            className="text-xl sm:text-2xl font-bold text-white shrink-0"
          >
            <span className="text-purple-500">Shop</span>
            Verse
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5">
            <h1 className="text-sm lg:text-base text-gray-300 whitespace-nowrap">
              Hey,{" "}
              <strong className="text-purple-400">
                {userName.charAt(0).toUpperCase() + userName.slice(1)}
              </strong>
            </h1>

            {/* Cart */}
            <button
              className="
                flex items-center gap-2
                px-2 lg:px-4
                py-1
                rounded-lg
                max-lg:text-base
                bg-purple-600
                text-white
                hover:bg-purple-500
                hover:shadow-[0_0_18px_rgba(168,85,247,0.4)]
                active:scale-95
                transition-all duration-300
              "
            >
              <ShoppingCart size={18} />
              <span>Cart</span>
            </button>

            {/* Logout */}
            <button
            onClick={() => {
              dispatch(removeUser())
              toast.warning("User Logged Out", {closeOnClick: true})
              navigate("/")
            }}
              className="
                p-2
                text-gray-400
                hover:text-red-400
                hover:bg-red-400/10
                rounded-lg
                transition-all duration-300
              "
            >
              <LogOut size={20} />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Cart */}
            <button
              className="
                relative
                p-2.5
                text-gray-300
                hover:text-white
                hover:bg-purple-500/10
                rounded-lg
                transition
              "
            >
              <ShoppingCart size={20} />

              {/* Cart Count */}
              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  w-4
                  h-4
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-600
                  text-[10px]
                  text-white
                "
              >
                0
              </span>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-2.5
                text-gray-300
                hover:text-white
                hover:bg-zinc-800
                rounded-lg
                transition
              "
            >
              {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isMenuOpen
                ? "max-h-[400px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="border-t border-zinc-800 pt-4">
            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.end}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `
                    px-4 py-3
                    rounded-lg
                    transition-all
                    ${
                      isActive
                        ? "bg-purple-500/10 text-purple-400 font-semibold"
                        : "text-gray-400 hover:text-white hover:bg-zinc-900"
                    }
                    `
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile User */}
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <p className="px-4 text-sm text-gray-400">
                Hey,{" "}
                <span className="text-purple-400 font-semibold">
                  {userName.charAt(0).toUpperCase() + userName.slice(1)}
                </span>
              </p>

              <button
                className="
                  mt-3
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-3
                  rounded-lg
                  text-red-400
                  bg-red-400/5
                  hover:bg-red-400/10
                  transition
                "
                onClick={() => {
                  dispatch(removeUser())
                  toast.warning("User Logged Out", {closeOnClick: true})
                  navigate("/");
                }}
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
