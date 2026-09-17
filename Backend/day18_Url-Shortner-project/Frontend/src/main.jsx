import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ContextProvider } from "./context/urlStore.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
