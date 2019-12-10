import { combineReducers } from "redux";
import users from "./users";
import store from "./store";
import Donations from "./Donations";
import DetailGalang from "./DetailGalang";
import LoginReg from './LoginReg';

export default combineReducers({
  users,
  store,
  Donations,
  DetailGalang,
  LoginReg,
});