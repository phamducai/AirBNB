import { Cards } from "component/Cards/Cards";
import Filter from "component/Filter/Filter";
import NavBar from "component/Header/NavBar";
import Test from "component/Test";
import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeTemplate() {
  return (
    <div>
      <NavBar></NavBar>
      <Filter></Filter>
      <Cards></Cards>
      {/* <Test></Test> */}
      <Outlet></Outlet>
    </div>
  );
}
