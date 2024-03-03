import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileSidebar from "../components/MobileSidebar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="drawer h-dvh">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="shadow-md">
          <Header />
        </div>
        <div >
          <Outlet />
        </div>
        <Footer />
      </div>
      <MobileSidebar />
    </div>
  );
}
