import React from "react";
import "./Layout.css";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
