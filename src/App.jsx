import { memo, useContext, useEffect, useState } from "react";
import "./App.css";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import image from "./assets/cardImage.png";
import SideBar from "./components/SideBar/SideBar.jsx";
import { FetchAPI } from "./services/FetchAPI.js";
import TypeProvider from "./contextProviders/TypeProvider.jsx";

const App = memo(function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, [navigate]);
  return (
    <TypeProvider>
      <div className="container">
        <SideBar />
        <Outlet />
      </div>
    </TypeProvider>
  );
});

export default App;
