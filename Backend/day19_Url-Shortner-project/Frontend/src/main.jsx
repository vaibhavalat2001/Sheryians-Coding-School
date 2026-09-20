import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ContextProvider } from "./context/urlStore.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ToastContainer />
    <App />
  </ContextProvider>,
);
