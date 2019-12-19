import { _saveQuestion } from "../utils/_DATA";
import{saveQuestionToUserInfo} from './users'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION";
export const SAVE_QUESTION_CONTENT = 'ADD_QUESTION_CONTENT';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}
export function saveAnswerToQuestion(authUser, qid, answer) {
  return {
    type: SAVE_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer
  };
}

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION_CONTENT,
    question
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(saveQuestion(question));
        dispatch(saveQuestionToUserInfo(question));
      }
    );
  };
}