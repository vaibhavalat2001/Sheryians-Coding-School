import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRouter from "./router/AppRouter.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import ShopPage from "./pages/ShopPage.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRouter />
    <ToastContainer />
  </AuthProvider>,
);
