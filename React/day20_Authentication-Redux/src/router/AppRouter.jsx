import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { toast } from "react-toastify";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";

const AppRouter = () => {
  const dispatch = useDispatch();
  const hydration = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      toast.error("UnAuthrorise user");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydration();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
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
          element: <MainLayout />,
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

export default AppRouter;
