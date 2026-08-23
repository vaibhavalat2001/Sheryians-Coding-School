import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import HomePage from "../../features/Dashboard/ui/pages/HomePage";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
            path: "",
            element: <LoginPage/>
        },
        {
            path: "register", 
            element: <RegisterPage/>
        }
      ],
    },
    {
      path: "/home",
      element: <DashboardLayout />,
      children: [
        {
            path: "",
            element: <HomePage/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router}/>;
};

export default AppRoutes;
