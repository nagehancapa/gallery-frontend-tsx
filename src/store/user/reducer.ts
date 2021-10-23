import {
  UserState,
  UserAction,
  LOGIN_SUCCESS,
  LOG_OUT,
  TOKEN_STILL_VALID,
} from "./types";

const initialState: UserState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  isArtist: false,
};

export default function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
