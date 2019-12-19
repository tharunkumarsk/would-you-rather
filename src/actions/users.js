import { _saveQuestionAnswer } from "../utils/_DATA";
import { saveAnswerToQuestion } from "./questionList";

export const RECEIVED_USERS = "RECEIVED_USERS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_QUESTION_TO_USER = "SAVE_QUESTION_TO_USER";

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
    dispatch(saveAnswerToUser(authUser, qid, answer));
    dispatch(saveAnswerToQuestion(authUser, qid, answer));

    const authedUser = authUser;

    return _saveQuestionAnswer({ authedUser, qid, answer });
  };
}

export function saveQuestionToUserInfo({ id, author }) {
  return {
    type: SAVE_QUESTION_TO_USER,
    id,
    author
  };
}
