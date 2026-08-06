import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDeatails from "../pages/ProductDeatails";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<ProductDeatails />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
