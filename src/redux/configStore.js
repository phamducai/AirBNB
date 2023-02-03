import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Auth } from "./reducers/AuthReducer";
import { CommentsReducer } from "./reducers/CommentsReducer";
import { AdminUserReducers } from "./reducers/AdminUserReducer";
import { LocationReducer } from "./reducers/LocationReducer";
import { RentalRoomReducers } from "./reducers/RoomReducer";
import { BookRoomReducer } from "./reducers/BookRoomReducer";
import  detailRoomReducer  from "./reducers/detailRoomReducer";

const rootReducer = combineReducers({
  Auth,
  CommentsReducer,
  AdminUserReducers,
  LocationReducer,
  RentalRoomReducers,
  BookRoomReducer,
  detailRoomReducer, 
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;