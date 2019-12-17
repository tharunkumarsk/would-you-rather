import { _getQuestions as getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "./questionList";
import { setAuthUserID } from "./authUser";

const AUTH_USER = "tylermcginnis";

export function handlePageLoadData() {
  return dispatch => {
    return getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUserID(AUTH_USER));
    });
  };
}
