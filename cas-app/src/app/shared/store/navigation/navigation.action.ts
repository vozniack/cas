import {createAction, props} from "@ngrx/store";
import {SimpleNavigationState} from "./navigation.state";

export const SET_NAVIGATION_STATE = createAction(
  '[Navigation State] Set navigation state', props<{ navigationState: SimpleNavigationState }>()
);
