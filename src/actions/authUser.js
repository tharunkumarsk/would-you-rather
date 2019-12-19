export const SET_AUTH_USERID = "SET_AUTH_USERID";

export function setAuthUserID(id) {
  return {
    type: SET_AUTH_USERID,
    id
  };
}
