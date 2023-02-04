import NavBar from "component/Header/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeTemplate() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}
