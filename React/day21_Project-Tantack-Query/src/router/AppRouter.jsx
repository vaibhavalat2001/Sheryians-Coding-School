import React, { lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { toast } from "react-toastify";
import AuthLayout from "../layouts/AuthLayout";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../layouts/MainLayout";
const LoginPage = lazy(() => import('../pages/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage'))
const HomePage = lazy(() => import('../pages/HomePage'))
const ShopPage = lazy(() => import('../pages/ShopPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))

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
            {
              path: "shop",
              element: <ShopPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
