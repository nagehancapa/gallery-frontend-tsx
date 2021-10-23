import {
  AppState,
  AppAction,
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "./types";

const initialState: AppState = {
  loading: false,
  message: {
    variant: "",
    dismissable: false,
    text: "",
  },
};

export default function appStateReducer(
  state = initialState,
  action: AppAction
) {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    default:
      return state;
  }
}
