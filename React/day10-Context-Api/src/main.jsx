import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TestComponent from "./TestComponent.jsx";
import { ContextProvider } from "./context/MyContext.jsx";
import { MyProductContextProvider } from "./context/MyProduct.jsx";
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
  <MyProductContextProvider>
    <ToastContainer/>
    <App/>
  </MyProductContextProvider>
);
