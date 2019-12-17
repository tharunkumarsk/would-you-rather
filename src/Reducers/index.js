import { combineReducers } from "redux";
import questions from "./questions";
import authUser from "./authUser";

export default combineReducers({
  questions,
  authUser
});
