export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION";

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
