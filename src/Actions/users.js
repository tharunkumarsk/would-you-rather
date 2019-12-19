import { _saveQuestionAnswer } from "../utils/_DATA";
import { saveAnswerToQuestion } from "./questionList";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVED_USERS = "RECEIVED_USERS";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receivedUsers(users) {
  return {
    type: RECEIVED_USERS,
    users
  };
}

function saveAnswerToUser(authUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authUser,
    qid,
    answer
  };
}

export function handleSaveAnswer(authUser, qid, answer) {
  return dispatch => {
    //dispatch(showLoading());
    dispatch(saveAnswerToUser(authUser, qid, answer));
    dispatch(saveAnswerToQuestion(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch(e => {
      debugger;
      //dispatch(hideLoading());
      console.warn("Error in saving the answer ", e);
      dispatch(saveAnswerToUser(authUser, qid, answer));
      dispatch(saveAnswerToQuestion(authUser, qid, answer));
      alert("Error in saving the answer. Try again.");
    });
  };
}

export function saveQuestionAnswer(authUser, qid, answer) {
  console.log("info", { authUser, qid, answer });
  return _saveQuestionAnswer({ authUser, qid, answer });
}
