import Footer from "component/Footer/Footer";
import NavBar from "component/Header/NavBar";
import React from "react";
import { useParams } from "react-router-dom";
import DetailRoom from "template/DetailTemplate/DetailRoom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="shadow-md">
        <NavBar />
      </div>
      <DetailRoom paramsId={id} />
      <Footer />
    </div>
  );
};

export default Detail;
