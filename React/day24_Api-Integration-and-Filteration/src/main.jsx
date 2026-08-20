import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
<QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <ToastContainer />
    <AppRoutes />
  </Provider>,
</QueryClientProvider>
);
