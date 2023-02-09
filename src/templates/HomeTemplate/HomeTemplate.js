/* eslint-disable react-hooks/exhaustive-deps */
import { Cards } from "component/Cards/Cards";
import Filter from "component/Filter/Filter";
import Footer from "component/Footer/Footer";
import NavBar from "component/Header/NavBar";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getAllRentalRoomAction } from "redux/actions/RetalRoomAction";

export default function HomeTemplate() {
  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "30",
          backgroundColor: "white",
        }}
      >
        <NavBar></NavBar>
        <Filter></Filter>
      </div>

      {/* <Test></Test> */}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
