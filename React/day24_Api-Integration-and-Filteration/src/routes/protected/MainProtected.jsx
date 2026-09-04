import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading)
    return (
      <div className="bg-black h-screen">
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border-4 border-[#262626]" />

            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-purple-500" />

            <div className="absolute inset-3 rounded-full bg-[#0d0d0d]" />
          </div>
        </div>
      </div>
    );

  if (!user) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainProtected;
