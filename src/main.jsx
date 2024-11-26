import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./components/router/routes.jsx";
import { SharedStateProvider } from "./components/SharedStateContext.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SharedStateProvider>
      <RouterProvider router={router} />
    </SharedStateProvider>
  </StrictMode>
);
