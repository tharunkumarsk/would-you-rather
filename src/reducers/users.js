import { RECEIVED_USERS, SAVE_ANSWER } from "../actions/users";

export default function users(state = null, action) {
  switch (action.type) {
    case RECEIVED_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_ANSWER:
      const { authUser, qid, answer } = action;
      console.log("...state,", { ...state });
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}
