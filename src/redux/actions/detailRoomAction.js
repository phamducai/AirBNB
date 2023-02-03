import requester from "services/api";
import detailRoomActions from "./types/detailRoomType";


export const fetchDetailRoomAction = (id) => {
    return async (next) => {
        try{
            const res = await requester({
                url: "/api/phong-thue",
                method: "GET",
                params: {
                    id: id,
                },
            });
            next({
                type: detailRoomActions.SET_DETAIL_ROOM,
                payload: res.data.content,
            });
        } catch(err) {}
    };
};