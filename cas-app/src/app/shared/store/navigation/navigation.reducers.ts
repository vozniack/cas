import {initializeNavigationState, SimpleNavigationState} from "./navigation.state";
import {Action, createReducer, on} from "@ngrx/store";
import {SET_NAVIGATION_STATE} from "./navigation.action";

const initialState = initializeNavigationState();

export function navigationReducer(state: SimpleNavigationState = initialState, action: Action) {
  return _navigationReducer(state, action);
}

const _navigationReducer = createReducer(initialState,
  on(SET_NAVIGATION_STATE, (state, newState) => onSetState(state, newState.navigationState))
)

function onSetState(state: SimpleNavigationState, newState: SimpleNavigationState) {
  return {
    ...state,
    title: newState.title,
    subtitle: newState.subtitle
  }
}
