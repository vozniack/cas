import {AppState, PageState, ResourceState, UserState} from './app.state';
import {emptyResource, initialAppState} from './app.const';
import {Action, createReducer, on} from '@ngrx/store';
import {
  ACTION_SET_NAVIGATION,
  ACTION_INIT_RESOURCE,
  ACTION_USER_LOGIN,
  ACTION_USER_LOGOUT,
  ACTION_SET_PAYLOAD
} from './app.actions';

const initialState = initialAppState();

export function appReducer(state: AppState = initialState, action: Action) {
  return _appReducer(state, action);
}

const _appReducer = createReducer(initialState,
  on(ACTION_SET_NAVIGATION, (state, newState) => onSetNavigation(state, newState.page)),

  on(ACTION_USER_LOGIN, (state, newState) => onSetUser(state, newState.user)),
  on(ACTION_USER_LOGOUT, (state) => onSetUser(state, {})),

  on(ACTION_INIT_RESOURCE, (state, newState) => onSetResource(state, newState.resource)),
  on(ACTION_SET_PAYLOAD, (state, newResourceState) => onSetPayload(state, newResourceState.payload))
);

function onSetNavigation(state: AppState, page: PageState) {
  return {
    ...state,
    page: page,
    resource: emptyResource
  };
}

/* User */

function onSetUser(state: AppState, user: UserState) {
  return {
    ...state,
    user: user
  };
}

function onSetResource(state: AppState, resource: ResourceState) {
  return {
    ...state,
    resource: resource,
    editMode: {
      enabled: false,
      payload: undefined
    }
  };
}

function onSetPayload(state: AppState, payload: any) {
  return {
    ...state,
    resource: {
      ...state.resource,
      payload: payload
    }
  };
}
