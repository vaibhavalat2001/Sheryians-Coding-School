import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RegisterPage from "../pages/auth/RegisterPage";
import ProfilePage from "../pages/auth/ProfilePage";
import MainLayout from "../layouts/MainLayout";

const AppRouters = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouters;
