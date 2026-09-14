import { createRoot } from "react-dom/client";
import "./app.css";
import AppRouter from "./AppRouter.jsx";
import { ContextProvider } from "./context/userContext.jsx";
createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AppRouter />
  </ContextProvider>,
);
