import { combineReducers } from "redux";
import users from "./users";
import store from "./store";
import Donations from "./Donations";

export default combineReducers({
  users,
  store,
  Donations
});