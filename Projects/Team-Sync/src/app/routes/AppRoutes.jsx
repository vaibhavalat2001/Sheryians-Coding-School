import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import HomePage from "../../features/Dashboard/ui/pages/HomePage";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/authAction";
import AuthProtected from "./protected/authProtected";
import MainProtected from "./protected/mainProtected";
const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee());
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
