export type UserState = {
  token: string | null;
  name: string;
  email: string;
  isArtist: boolean;
};

export type UserWithoutToken = {
  name: string;
  email: string;
};

export type UserWithToken = UserWithoutToken & { token: string };

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS;
  payload: UserWithToken;
};

type TokenStillValidAction = {
  type: typeof TOKEN_STILL_VALID;
  payload: UserWithoutToken;
};

type LogOutAction = {
  type: typeof LOG_OUT;
};

export type UserAction =
  | LoginSuccessAction
  | TokenStillValidAction
  | LogOutAction;
