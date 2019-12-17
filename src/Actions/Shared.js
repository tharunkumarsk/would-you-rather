import { _getQuestions } from "../utils/_DATA";
import { _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "./questionList";
import { setAuthUserID } from "./authUser";
import { receivedUsers } from "./users";

const AUTH_USER = "tylermcginnis";

export function handlePageLoadData() {
  return dispatch => {
    return getPageLoadData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receivedUsers(users));
      dispatch(setAuthUserID(AUTH_USER));
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
