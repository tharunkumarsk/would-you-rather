import { combineReducers } from "redux";
import questions from "./questions";
import authUser from "./authUser";
import users from "./users";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authUser,
  questions,
  users,
  loadingBar: loadingBarReducer
});
