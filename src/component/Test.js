import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
//import "swiper/css/navigation";
import "./Test.css";
// import required modules
import { Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//-----------------------------
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Test() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <div>
        <React.Fragment key={"top"}>
          <Button onClick={toggleDrawer("top", true)}>{"top"}</Button>
          <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            abc
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
}

// <div style={{ height: "150px", width: "300px", position: "relative" }}>
//   <div className="swiper-button image-swiper-button-next">
//     <IoIosArrowForward />
//   </div>
//   <div className="swiper-button image-swiper-button-prev">
//     <IoIosArrowBack />
//   </div>
//   <Swiper
//     navigation={{
//       nextEl: ".image-swiper-button-next",
//       prevEl: ".image-swiper-button-prev",
//       disabledClass: "swiper-button-disabled",
//     }}
//     modules={[Navigation]}
//     className="mySwiper"
//   >
//     <SwiperSlide>Slide 1</SwiperSlide>
//     <SwiperSlide>Slide 2</SwiperSlide>
//     <SwiperSlide>Slide 3</SwiperSlide>
//     <SwiperSlide>Slide 4</SwiperSlide>
//     <SwiperSlide>Slide 5</SwiperSlide>
//     <SwiperSlide>Slide 6</SwiperSlide>
//     <SwiperSlide>Slide 7</SwiperSlide>
//     <SwiperSlide>Slide 8</SwiperSlide>
//     <SwiperSlide>Slide 9</SwiperSlide>
//   </Swiper>
// </div>
