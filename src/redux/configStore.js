import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Auth } from "./reducers/AuthReducer";
import { CommentsReducer } from "./reducers/CommentsReducer";

const rootReducer = combineReducers({
  Auth,
  CommentsReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
