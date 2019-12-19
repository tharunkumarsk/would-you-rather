import { _getQuestions } from "../utils/_DATA";
import { _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "./questionList";
import { receivedUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handlePageLoadData() {
  return dispatch => {
    dispatch(showLoading());
    return getPageLoadData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receivedUsers(users));
      dispatch(hideLoading());
    });
  };
}

function getPageLoadData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}
