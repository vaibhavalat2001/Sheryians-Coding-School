import React, { useState } from "react";
import { NavLink } from "react-router";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  Heart,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-100 bg-[#fffdf8]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-bold text-white shadow-lg shadow-emerald-200">
            S
          </div>

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-emerald-950">
              Shoply
            </h1>

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-600">
              Shop smarter
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-emerald-600"
                    : "text-slate-600 hover:text-emerald-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-orange-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">

          {/* Search */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600"
            aria-label="Search"
          >
            <Search size={19} />
          </button>

          {/* Wishlist */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-rose-50 hover:text-rose-500"
            aria-label="Wishlist"
          >
            <Heart size={19} />
          </button>

          {/* Account */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600"
            aria-label="Account"
          >
            <User size={19} />
          </button>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative ml-1 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200 transition hover:scale-105 hover:shadow-lg"
            aria-label="Cart"
          >
            <ShoppingCart size={19} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white ring-2 ring-[#fffdf8]">
              2
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-emerald-100 bg-[#fffdf8] px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-1 pt-3">

            {/* Mobile Links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-100"
                      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Actions */}
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-emerald-100 pt-4">

              <button className="flex flex-col items-center gap-1 rounded-xl py-3 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600">
                <Search size={19} />
                <span className="text-xs">Search</span>
              </button>

              <button className="flex flex-col items-center gap-1 rounded-xl py-3 text-slate-500 transition hover:bg-rose-50 hover:text-rose-500">
                <Heart size={19} />
                <span className="text-xs">Wishlist</span>
              </button>

              <NavLink
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="relative flex flex-col items-center gap-1 rounded-xl py-3 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-600"
              >
                <ShoppingCart size={19} />
                <span className="text-xs">Cart</span>

                <span className="absolute right-5 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[9px] font-bold text-white">
                  2
                </span>
              </NavLink>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;