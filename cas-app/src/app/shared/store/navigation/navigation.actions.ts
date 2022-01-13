import {createAction, props} from "@ngrx/store";
import {SimpleNavigationState} from "./navigation.state";

export const ACTION_SET_NAVIGATION = createAction(
  '[Navigation State] Set navigation state', props<{ navigationState: SimpleNavigationState }>()
);
