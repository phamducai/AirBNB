import requester from "services/api";
import detailRoomAction from "./types/detailRoomType";

export const fetchDetailRoomAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        url: "/api/phong-thue/" + id,
        method: "GET",
      });
      next({
        type: detailRoomAction.SET_DETAIL_ROOM,
        payload: res.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCheckRoomAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        url: "/api/dat-phong/" + id,
        method: "GET",
      });
      next({
        type: detailRoomAction.SET_CHECK_ROOM,
        payload: res.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchBookRoomAction = async (next) => {
  try {
    const res = await requester({
      url: "/api/dat-phong",
      method: "POST",
    });
    next({
      type: detailRoomAction.SET_BOOK_ROOM,
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};
