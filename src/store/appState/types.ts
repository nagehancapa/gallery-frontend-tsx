export type Message = {
  variant: string;
  dismissable: boolean;
  text: string;
};

export type AppState = {
  loading: boolean;
  message: Message;
};

export const APP_LOADING = "APP_LOADING";
export const APP_DONE_LOADING = "APP_DONE_LOADING";
export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

type SetMessageAction = {
  type: typeof SET_MESSAGE;
  payload: {};
};

type ClearMessageAction = {
  type: typeof CLEAR_MESSAGE;
};

type appDoneLoadingAction = {
  type: typeof APP_DONE_LOADING;
};

type appLoadingAction = {
  type: typeof APP_LOADING;
};

export type AppAction =
  | SetMessageAction
  | ClearMessageAction
  | appDoneLoadingAction
  | appLoadingAction;
