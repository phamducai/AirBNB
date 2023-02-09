/* eslint-disable jsx-a11y/iframe-has-title */
import { Cards } from "component/Cards/Cards";
import NavBar from "component/Header/NavBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRentalRoomByLocationAction } from "redux/actions/RetalRoomAction";

export default function LocationClient() {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);
  const cardRoom = useSelector((state) => state.RoomReducers.getAllRenderRoom);
  console.log(cardRoom);
  useEffect(() => {
    dispatch(getRentalRoomByLocationAction(id));
  }, []);
  return (
    <div>
      <NavBar />
      <div className="mx-4">
        <div className="flex justify-between flex-wrap">
          <div className="w-1/2 ">
            <Cards AllRoom={cardRoom} />
          </div>
          <div className="w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15739732.907271802!2d96.86701116987972!3d15.607230160501059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1661359870280!5m2!1svi!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}