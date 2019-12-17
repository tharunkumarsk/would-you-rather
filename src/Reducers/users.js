import { RECEIVED_USERS } from "../Actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVED_USERS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
}
