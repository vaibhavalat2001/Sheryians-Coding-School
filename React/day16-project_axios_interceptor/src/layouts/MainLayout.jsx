import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { TextAlignJustify, X } from "lucide-react";
import { Auth } from "../context/AuthContext";

const MainLayout = () => {
  const [nav, setNav] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(Auth);

  return (
    <div className="grid h-screen grid-cols-1 bg-gradient-to-br from-violet-50 via-purple-100 to-indigo-200 lg:grid-cols-[220px_1fr]">
      {/* Mobile / Tablet Top Bar */}
      <div className="absolute bg-white w-full top-0 z-50 flex items-center justify-between px-6 py-4 lg:hidden">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setNav(true)}
            className="rounded-lg p-1 transition active:scale-90"
          >
            <TextAlignJustify className="h-8 w-8" />
          </button>
          <h1 className="text-2xl font-bold">E-COMM</h1>
        </div>

        <button className="bg-gradient-to-tl from-emerald-500 font-bold via-pink-600 to-indigo-500 text-white rounded-full w-11 cursor-pointer active:scale-90 text-4xl">
          {loggedInUser.name.toUpperCase().charAt(0)}
        </button>
      </div>

      {/* Overlay */}
      {nav && (
        <div
          onClick={() => setNav(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Navbar / Sidebar */}
      <div
        className={`
          fixed left-0 top-0 h-full z-50 sm:w-[260px] max-sm:w-[200px] bg-white
          shadow-xl transition-transform duration-300
          lg:static lg:block lg:w-auto lg:translate-x-0 lg:shadow-none
          ${nav ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={() => setNav(false)}
            className="rounded-lg p-1 transition active:scale-90"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <Navbar />
      </div>

      {/* Main Content */}
      <div className="overflow-auto max-lg:pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
