import React, { useEffect, useRef, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";
import { Box, ShoppingCart, Menu, X, Zap, LogOut } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  // Close mobile menu when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    {
      name: "Home",
      path: "/main",
    },
    {
      name: "Shop",
      path: "/main/product",
    },
    {
      name: "About",
      path: "/main/about",
    },
  ];

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}
        <NavLink
          to="/main"
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Zap size={21} className="fill-white text-white" />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-white">
              Nex
              <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zora
              </span>
            </h1>

            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500">
              Shop smarter
            </p>
          </div>
        </NavLink>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.name === "Home"}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-zinc-950 shadow-lg shadow-white/10"
                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Cart */}
          <NavLink
            to="/main/cart"
            className={({ isActive }) =>
              `group relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                isActive
                  ? "border-violet-500/40 bg-violet-500/15 text-violet-400"
                  : "border-white/10 bg-white/5 text-zinc-400 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
              }`
            }
          >
            <ShoppingCart
              size={19}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            {/* Cart Badge */}
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-violet-600 px-1 text-[9px] font-bold text-white">
              0
            </span>
          </NavLink>

          {/* Orders */}
          <NavLink
            to="/main/order"
            className={({ isActive }) =>
              `flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                isActive
                  ? "border-violet-500/40 bg-violet-500/15 text-violet-400"
                  : "border-white/10 bg-white/5 text-zinc-400 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
              }`
            }
          >
            <Box size={19} />
          </NavLink>

          {/* Divider */}
          <div className="mx-2 h-7 w-px bg-white/10" />

          {/* Logout */}
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              navigate("/");
            }}
            type="button"
            className="group flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300"
          >
            <LogOut
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Logout
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-zinc-950 transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-4 py-4">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.name === "Home"}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-violet-500/15 text-violet-400"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="my-3 h-px bg-white/10" />

          {/* Mobile Cart + Orders */}
          <div className="grid grid-cols-2 gap-2">
            <NavLink
              to="/main/cart"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition-all duration-300 ${
                  isActive
                    ? "border-violet-500/30 bg-violet-500/10 text-violet-400"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <ShoppingCart size={17} />
              Cart
            </NavLink>

            <NavLink
              to="/main/order"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition-all duration-300 ${
                  isActive
                    ? "border-violet-500/30 bg-violet-500/10 text-violet-400"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Box size={17} />
              Orders
            </NavLink>
          </div>

          {/* Mobile Logout */}
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              navigate("/");
            }}
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/20"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
