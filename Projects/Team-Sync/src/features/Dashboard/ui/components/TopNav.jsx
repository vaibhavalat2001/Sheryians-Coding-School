import { Bell, Grip, Search } from "lucide-react";
import React from "react";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="bg-[var(--secondary)] flex items-center gap-4 border border-zinc-600 rounded-lg py-2 pl-2 ">
        <Search size={24} />
        <input className="outline-none text-[var(--text-primary)] max-w-[40vw] min-w-[30vw] text-lg" type="text" placeholder="Search workspace..." />
      </div>
      <div className="flex gap-4">
        <Bell />
        <Grip />
      </div>
    </div>
  );
};

export default TopNav;
