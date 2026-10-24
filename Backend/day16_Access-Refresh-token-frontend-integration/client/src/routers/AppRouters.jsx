import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RegisterPage from "../pages/auth/RegisterPage";
import ProfilePage from "../pages/auth/ProfilePage";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/auth/LoginPage";

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
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouters;
