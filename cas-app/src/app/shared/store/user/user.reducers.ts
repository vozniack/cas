import {Action, createReducer, on} from "@ngrx/store";
import {ACTION_USER_LOGIN, ACTION_USER_LOGOUT} from "./user.actions";
import {initializeUserState, UserState} from "./user.state";

const initialState = initializeUserState();

export function userReducer(state: UserState = initialState, action: Action) {
  return _userReducer(state, action);
}

const _userReducer = createReducer(initialState,
  on(ACTION_USER_LOGIN, (state, newState) => onLogin(state, newState.userState)),
  on(ACTION_USER_LOGOUT, (state) => onLogout(state))
)

function onLogin(state: UserState, newState: UserState) {
  return {
    ...state,
    token: newState.token
  }
}

function onLogout(state: UserState) {
  return {
    ...state,
    token: undefined
  }
}
