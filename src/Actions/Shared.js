import { _getQuestions as getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "./questionList";

export function handlePageLoadData() {
  return dispatch => {
    return getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
    });
  };
}
