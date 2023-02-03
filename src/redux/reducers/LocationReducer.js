import produce from "immer";
import {
  GET_ALL_LOCATION_BY_ID,
  GET_PAGINATION_SEARCH,
  GET_ALL_LOCATION,
} from "redux/actions/types/LocationType";
const inititalState = {
  getAllLocaiton: [],

  getLocationById: null,

  getPaginationSearchingLocation: null,
};

export const LocationReducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_LOCATION:
        draft.getAllLocaiton = action.payload;
        break;
      case GET_PAGINATION_SEARCH:
        draft.getPaginationSearchingLocation = action.payload;
        break;
      case GET_ALL_LOCATION_BY_ID:
        draft.getLocationById = action.payload;
        break;
      default:
        break;
    }
  });
};
