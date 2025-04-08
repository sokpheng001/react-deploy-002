import React from "react";
import { Outlet } from "react-router";
import NavbarComponent from "../components/NavbarComponent";

export default function RootLayout() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
}
