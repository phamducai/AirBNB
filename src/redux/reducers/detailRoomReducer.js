import produce from "immer";
import detailRoomAction from "redux/actions/types/detailRoomType";

const inititalState = {
  detailRoom: null,
  checkRoom: null,
  BookRoom: null,
};

const reducer = (state = inititalState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case detailRoomAction.SET_DETAIL_ROOM:
        draft.detailRoom = payload;
        break;
      case detailRoomAction.SET_CHECK_ROOM:
        draft.checkRoom = payload;
        break;
      case detailRoomAction.SET_BOOK_ROOM:
        draft.checkRoom = payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;
