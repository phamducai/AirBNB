import { Cards } from "component/Cards/Cards";
import Filter from "component/Filter/Filter";
import NavBar from "component/Header/NavBar";
import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import DetailRoom from "template/DetailTemplate/DetailRoom";

const Detail = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className="shadow-md">
        <NavBar />
      </div>
      <DetailRoom paramsId={id} />
    </div>
  );
};

export default Detail;
