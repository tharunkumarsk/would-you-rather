import { _getQuestions } from "../utils/_DATA";
import { _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "./questionList";
import { setAuthUserID } from "./authUser";
import { receivedUsers } from "./users";

const AUTH_USER = "tylermcginnis";

export function handlePageLoadData() {
  return dispatch => {
    return getPageLoadData().then(({ users, questions, id }) => {
      debugger;
      dispatch(setAuthUserID(id));
      dispatch(receiveQuestions(questions));
      dispatch(receivedUsers(users));
    });
  };
}

function getPageLoadData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
      id: AUTH_USER
    })
  );
}
