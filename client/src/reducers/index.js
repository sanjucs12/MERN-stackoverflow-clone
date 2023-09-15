import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./currentUserReducer";

export default combineReducers({
  authReducer,
  currentUserReducer,
});
