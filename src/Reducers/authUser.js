import { SET_AUTH_USERID } from "../actions/AuthUser";

export default function authUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USERID:
      return action.id;
    default:
      return state;
  }
}
