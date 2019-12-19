import {
  RECEIVE_QUESTIONS,
  SAVE_ANSWER_TO_QUESTION,
  SAVE_QUESTION_CONTENT
} from "../actions/questionList";

export default function questions(state = null, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_ANSWER_TO_QUESTION:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser)
          }
        }
      };
      case SAVE_QUESTION_CONTENT:
        const { question } = action;
  
        return {
          ...state,
          [question.id]: question
        };
    default:
      return state;
  }
}
