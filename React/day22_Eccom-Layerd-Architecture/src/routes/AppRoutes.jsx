import React, { Children, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/MainLayout";
import AuthProtected from "./protected/AuthProtected";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainProtected from "./protected/MainProtected";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import AboutPage from "../shared/ui/pages/AboutPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";
import { hydrateUser } from "../features/auth/api/authApi";

const AppRoutes = () => {
  const disptach = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let responce = await hydrateUser();
        disptach(addUser(responce));
      } catch (error) {
        console.log("error in hydration: ", error);
      }
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
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },

            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "orders",
              element: <OrderPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
