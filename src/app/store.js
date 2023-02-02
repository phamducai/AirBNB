import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import bookingRoomReducer from "../services/redux/bookingSlice";

const reducer = combineReducers({
    bookingRoom: bookingRoomReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;