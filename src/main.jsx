import "./normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routing } from "./ui/Router";
import AuthContextProvider from "./contextProviders/AuthContextProvider";
import FavoriteProvider from "./contextProviders/FavoriteProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
        <FavoriteProvider>
            <RouterProvider router={routing} />
        </FavoriteProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
