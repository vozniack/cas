import {AppState, PageState, ResourceState, UserState} from "./app.state";
import {Action, createReducer, on} from "@ngrx/store";
import {
  ACTION_DISABLE_EDIT,
  ACTION_ENABLE_EDIT,
  ACTION_SET_NAVIGATION,
  ACTION_SET_RESOURCE,
  ACTION_USER_LOGIN,
  ACTION_USER_LOGOUT
} from "./app.actions";
import {emptyActions, initialAppState} from "./app.const";

const initialState = initialAppState();

export function appReducer(state: AppState = initialState, action: Action) {
  return _appReducer(state, action);
}

const _appReducer = createReducer(initialState,
  on(ACTION_SET_NAVIGATION, (state, newState) => onSetNavigation(state, newState.page)),
  on(ACTION_USER_LOGIN, (state, newState) => onSetUser(state, newState.user)),
  on(ACTION_USER_LOGOUT, (state) => onSetUser(state, {})),
  on(ACTION_SET_RESOURCE, (state, newState) => onSetResource(state, newState.resource)),
  on(ACTION_ENABLE_EDIT, (state) => onChangeEdit(state, true)),
  on(ACTION_DISABLE_EDIT, (state) => onChangeEdit(state, false))
)

function onSetNavigation(state: AppState, page: PageState) {
  return {
    ...state,
    page: page,
    actions: emptyActions
  }
}

/* User */

function onSetUser(state: AppState, user: UserState) {
  return {
    ...state,
    user: user
  }
}

function onSetResource(state: AppState, resource: ResourceState) {
  return {
    ...state,
    resource: resource
  }
}

function onChangeEdit(state: AppState, edit: boolean) {
  return {
    ...state,
    actions: {
      ...state.actions,
      edit: edit
    }
  }
}
