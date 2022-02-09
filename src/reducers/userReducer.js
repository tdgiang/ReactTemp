import { WATCH_SAVE_USER_DATA } from "../actions/actionTypes";

const initialState = {
  user: { name: "Tdgiang", pass: "abc" },
  isSignedIn: false,
  expiredTime: new Date(),
  userInfo: {},
};
// @ts-ignore
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case WATCH_SAVE_USER_DATA: {
      return { ...action.data, isSignedIn: true };
    }
    default:
      return state;
  }
}
