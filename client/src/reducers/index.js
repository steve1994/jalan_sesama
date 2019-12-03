import { combineReducers } from "redux";
import users from "./users";
import store from "./store"

export default combineReducers({
  users,
  store
});