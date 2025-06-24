import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'leaflet/dist/leaflet.css';

import { router } from "./router/Router";

import { RouterProvider } from "react-router";
import { AuthProvider } from './context/AuthProvider';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
