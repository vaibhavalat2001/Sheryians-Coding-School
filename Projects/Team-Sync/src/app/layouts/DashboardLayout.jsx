import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { toggleTheme } from "../../shared/state/themeSlice";
import TopNav from "../../features/Dashboard/ui/components/TopNav";
import AsideNav from "../../features/Dashboard/ui/components/AsideNav";

const DashboardLayout = () => {
  const { mode } = useSelector((store) => store.theme);

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [mode]);

  return (
    <div className="h-screen bg-[var(--bg-main)] grid grid-cols-[1fr_7fr]">
      <div className="bg-[var(--bg-surface)] p-4 border-r border-[var(--border-color)]">
        <AsideNav />
      </div>
      <div className="flex flex-col gap-5">
        <div className="px-6 py-4 border-b border-[var(--border-color)]">
          <TopNav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
