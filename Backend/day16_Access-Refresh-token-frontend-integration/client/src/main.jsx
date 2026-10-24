import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.jsx";
import AppRouters from "./routers/AppRouters.jsx";
import { ContextProvider } from "./context/registerContext.jsx";
createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AppRouters />
  </ContextProvider>,
);
