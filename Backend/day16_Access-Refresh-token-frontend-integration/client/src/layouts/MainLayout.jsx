import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import {
  Sparkles,
  UserPlus,
  UserRound,
  Menu,
  X,
  LogIn,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { userStore } from "../context/registerContext";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const { user, setUser, setAccessToken } = useContext(userStore);

  const isAuthenticated = Boolean(user);

  // Close mobile menu when the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [navigate]);

  // Navigation link styling.
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/20"
        : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
    }`;

  const mobileLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-violet-500/15 text-violet-300"
        : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
    }`;

  const closeMenu = () => setMenuOpen(false);

  // Logout from the frontend context.
  const handleLogout = () => {
    setUser(null);
    setAccessToken(null);
    closeMenu();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#080B18] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0D1020]/90 shadow-lg shadow-black/10 backdrop-blur-xl">
        <nav
          className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <NavLink
            to={isAuthenticated ? "/profile" : "/login"}
            onClick={closeMenu}
            className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20 transition-transform duration-300 hover:scale-105 sm:h-11 sm:w-11">
              <Sparkles size={21} className="text-white" />
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-base font-bold tracking-tight text-white sm:text-xl">
                Create<span className="text-violet-400">Space</span>
              </h1>

              <p className="hidden text-[10px] tracking-[0.15em] text-slate-500 sm:block">
                YOUR PERSONAL SPACE
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex lg:gap-3">
            {isAuthenticated ? (
              <>
                <NavLink to="/profile" className={navLinkStyle}>
                  <UserRound size={17} />
                  <span>Profile</span>
                </NavLink>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-400 transition-all hover:border-red-400/20 hover:bg-red-500/10 hover:text-red-300"
                >
                  <LogOut size={17} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={navLinkStyle}>
                  <LogIn size={17} />
                  <span>Login</span>
                </NavLink>

                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20"
                        : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/10 hover:from-violet-500 hover:to-indigo-500"
                    }`
                  }
                >
                  <UserPlus size={17} />
                  <span>Get Started</span>
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/[0.06] px-4 py-4 sm:px-6">
              <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Menu
              </p>

              <div className="space-y-1">
                {isAuthenticated ? (
                  <>
                    <NavLink
                      to="/profile"
                      onClick={closeMenu}
                      tabIndex={menuOpen ? 0 : -1}
                      className={mobileLinkStyle}
                    >
                      <UserRound size={19} />
                      <span className="flex-1">Profile</span>
                      <ChevronRight size={17} className="opacity-50" />
                    </NavLink>

                    <button
                      type="button"
                      onClick={handleLogout}
                      tabIndex={menuOpen ? 0 : -1}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-red-300 transition-colors hover:bg-red-500/10"
                    >
                      <LogOut size={19} />
                      <span className="flex-1 text-left">Logout</span>
                      <ChevronRight size={17} className="opacity-50" />
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      onClick={closeMenu}
                      tabIndex={menuOpen ? 0 : -1}
                      className={mobileLinkStyle}
                    >
                      <LogIn size={19} />
                      <span className="flex-1">Login</span>
                      <ChevronRight size={17} className="opacity-50" />
                    </NavLink>

                    <NavLink
                      to="/register"
                      onClick={closeMenu}
                      tabIndex={menuOpen ? 0 : -1}
                      className={mobileLinkStyle}
                    >
                      <UserPlus size={19} />
                      <span className="flex-1">Create account</span>
                      <ChevronRight size={17} className="opacity-50" />
                    </NavLink>
                  </>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] px-3 pt-4">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-500">
                  {isAuthenticated
                    ? "You're signed in"
                    : "Welcome to CreateSpace"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;