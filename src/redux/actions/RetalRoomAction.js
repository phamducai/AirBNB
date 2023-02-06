import {
  GET_ALL_RENTAL_ROOM,
  GET_ALL_RENTAL_ROOM_BY_ID,
  GET_PAGINATION_SEARCH,
} from "redux/actions/types/RoomType";
import { room } from "services/room";

//getALL
export const getAllRentalRoomAction = () => {
  return async (dispatch) => {
    try {
      const result = await room.getAllRentalRoom();
      dispatch({
        type: GET_ALL_RENTAL_ROOM,
        payload: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
// POST /api/users
export const PostRentalRoomAction = (data) => {
  return async (dispatch) => {
    try {
      let result = await room.postRentalRoom(data);
      console.log(result);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

// GETBYLocation
export const getRentalRoomByLocationAction = (locationid) => {
  return async (dispatch) => {
    try {
      const result = await room.getRentalRoombyLocaltionID(locationid);
      dispatch({
        type: GET_ALL_RENTAL_ROOM,
        payload: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

//Search
export const GetPaginationSearchRentalRoomAction = (
  pageIndex = 1,
  pageSize = 10,
  keyword = ""
) => {
  return async (dispatch) => {
    try {
      const result = await room.getSearchbyPage(
        (pageIndex = 1),
        (pageSize = 10),
        (keyword = "")
      );
      if (result.data.statusCode === 200) {
        dispatch({
          type: GET_PAGINATION_SEARCH,
          payload: result.data.content,
        });
      }
    } catch (error) {
      throw error;
    }
  };
};

// GETBYID
export const getRentalRoomByIDAction = (roomid) => {
  return async (dispatch) => {
    try {
      const result = await room.getRentalRoombyID(roomid);
      console.log(result);

      if (result.data.statusCode === 200)
        dispatch({
          type: GET_ALL_RENTAL_ROOM_BY_ID,
          payload: result.data.content,
        });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

//PUT
export const UpdateRentalRoomAction = (roomid, data) => {
  return async (dispatch) => {
    try {
      let result = await room.putRentalRoom(roomid, data);
      console.log("result", result);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

//DELETE
// api/dat-phong/{id}
export const deleteRentalRoomAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await room.deleteRentalRoom(id);
      console.log("result", result.data.content);
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

// POST /api/users
export const UpLoadAvatarRoomAction = (data) => {
  return async (dispatch) => {
    try {
      let result = await room.postUploadRentalRoom(data);
      console.log(result);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
