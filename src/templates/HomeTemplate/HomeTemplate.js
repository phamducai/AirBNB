/* eslint-disable react-hooks/exhaustive-deps */

import { Cards } from "component/Cards/Cards";
import Filter from "component/Filter/Filter";
import NavBar from "component/Header/NavBar";
import Test from "component/Test";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getAllRentalRoomAction } from "redux/actions/RetalRoomAction";

export default function HomeTemplate() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRentalRoomAction());
  }, []);
  const AllRoom = useSelector((state) => state.RoomReducers.getAllRenderRoom);

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
      <Cards AllRoom={AllRoom}></Cards>
      {/* <Test></Test> */}
      <Outlet></Outlet>
    </div>
  );
}
