import React, { lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthProtected from "./protected/AuthProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
const RegisterPage = lazy(
  () => import("../features/auth/ui/pages/RegisterPage"),
);
const MainProtected = lazy(() => import("./protected/MainProtected"));
const MainLayout = lazy(() => import("../app/layouts/MainLayout"));
const HomePage = lazy(() => import("../shared/ui/pages/HomePage"));
const ProductPage = lazy(
  () => import("../features/product/ui/pages/ProductPage"),
);
const OrderPage = lazy(() => import("../features/order/ui/pages/OrderPage"));
const CartPage = lazy(() => import("../features/cart/ui/pages/CartPage"));
const AboutPage = lazy(() => import("../shared/ui/pages/AboutPage"));
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/state/authAction";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrateUserAction());
  }, []);

  const router = createBrowserRouter([
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
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "order",
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
