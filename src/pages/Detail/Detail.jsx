import { Cards } from "component/Cards/Cards";
import Filter from "component/Filter/Filter";
import NavBar from "component/Header/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import DetailRoom from "template/DetailTemplate/DetailRoom";


const Detail = () => {
  return (
    <div>
      <div className="shadow-md">
      <NavBar />
      </div>      
      <DetailRoom />      
    </div>
  );
};

export default Detail;
