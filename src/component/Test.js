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

export default function Test() {
  return (
    <div style={{ height: "150px", width: "300px", position: "relative" }}>
      <div className="swiper-button image-swiper-button-next">
        <IoIosArrowForward />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <Swiper
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
