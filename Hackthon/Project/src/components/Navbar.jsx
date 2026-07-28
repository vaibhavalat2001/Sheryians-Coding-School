import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full top-0 flex justify-between max-sm:px-3 px-6 py-5 bg-lime-600">
      <Link to="/" className="text-2xl transtion-text duration-100 active:text-amber-300 font-semibold">MediaSearch</Link>
      <div className="flex text-xl items-center gap-2">
        <Link
          to="/"
          className="bg-white active:scale-90 text-gray-900 max-sm:text-base rounded px-2 py-1 "
        >
          Search
        </Link>
        <Link
          to="/collection"
          className="bg-white active:scale-90 text-gray-900 max-sm:text-base rounded px-2 py-1 "
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
