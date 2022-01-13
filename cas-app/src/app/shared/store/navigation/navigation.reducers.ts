import {initializeNavigationState, SimpleNavigationState} from "./navigation.state";
import {Action, createReducer, on} from "@ngrx/store";
import {ACTION_SET_NAVIGATION} from "./navigation.actions";

const initialState = initializeNavigationState();

export function navigationReducer(state: SimpleNavigationState = initialState, action: Action) {
  return _navigationReducer(state, action);
}

const _navigationReducer = createReducer(initialState,
  on(ACTION_SET_NAVIGATION, (state, newState) => onSetState(state, newState.navigationState))
)

function onSetState(state: SimpleNavigationState, newState: SimpleNavigationState) {
  return {
    ...state,
    title: newState.title,
    subtitle: newState.subtitle
  }
}
