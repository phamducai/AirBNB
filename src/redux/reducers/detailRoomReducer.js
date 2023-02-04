import produce from "immer";
import detailRoomAction from "redux/actions/types/detailRoomType";

const inititalState = {
    detailRoom: null,    
};

const reducer = (state = inititalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case detailRoomAction.SET_DETAIL_ROOM:
                draft.detailRoom = payload;
                break;           
            default:
                break;
        };
    });
};

export default reducer;
