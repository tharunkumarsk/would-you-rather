import { _getQuestions as getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "./QuestionList";

export function handlePageLoadData() {
  return dispatch => {
    return getQuestions().then(({ questions }) => {
      console.log(questions);
      dispatch(receiveQuestions(questions));
    });
  };
}
