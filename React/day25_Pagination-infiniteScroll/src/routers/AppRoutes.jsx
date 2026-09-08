import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MainLayout from "../layouts/MainLayout";
import ProductPage from "../pages/ProductPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/product",
          element: <ProductPage/>
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
