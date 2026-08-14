import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import { getData } from "../apis/UsersApi";
// import AboutPage from "../pages/AboutPage";
// import ContactPage from "../pages/ContactPage";
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
          loader: getData,
          hydrateFallbackElement: <h1>Api loding...</h1>,
          element: (
            <Suspense fallback={<h1>About loding...</h1>} >
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
