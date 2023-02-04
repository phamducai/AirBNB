import requester from "services/api";
import detailRoomAction from "./types/detailRoomType";


export const fetchDetailRoomAction = (id) => {
    return async (next) => {
        try{
            const res = await requester({
                url: "/api/phong-thue/"+ id,
                method: "GET",
            });
            next({
                type: detailRoomAction.SET_DETAIL_ROOM,
                payload: res.data.content,
            });
        } catch(err) {}
    };
};