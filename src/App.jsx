import { memo } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

import SideBar from "./components/SideBar/SideBar.jsx";
import TypeProvider from "./contextProviders/TypeProvider.jsx";

const App = memo(function App() {
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
