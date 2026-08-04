import React, { useContext } from "react";
import { Handbag } from "lucide-react";
import { MyStore } from "../context/MyContext.jsx";


const Navbar = () => {
  const { setPage } = useContext(MyStore);

  return (
    <div className="bg-gradient-to-tr sm:text-lg font-semibold from-blue-500  via-cyan-400 to-purple-500 py-6 px-4 rounded-xl flex justify-between items-center">
      <Handbag onClick={() => setPage("productPage")} className="w-12 h-12 active:scale-90 rounded-2xl text-green-400 shadow shadow-fuchsia-600 -my-4"/>
      <div className="flex gap-10 max-sm:gap-4">
        <div
          onClick={() => setPage("productPage")}
          className="hover:underline active:scale-90 cursor-pointer transition-hover duration-200"
        >
          Home
        </div>
        <div
          onClick={() => setPage("cartPage")}
          className="active:scale-90 hover:underline cursor-pointer"
        >
          Cart
        </div>
      </div>
      <div className="active:scale-90 hover:underline" onClick={() => setPage("loginPage")}>Login</div>
    </div>
  );
};

export default Navbar;
