import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 🔔 Global Toast Provider */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#0F172A",
            color: "#ffffff",
            border: "1px solid #334155",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#0F172A",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#0F172A",
            },
          },
        }}
      />

      <App />
    </BrowserRouter>
  </React.StrictMode>
);

