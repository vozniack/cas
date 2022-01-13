import {createAction, props} from "@ngrx/store";
import {UserState} from "./user.state";

export const ACTION_USER_LOGIN = createAction(
  '[User State] Set user state', props<{ userState: UserState }>()
);

export const ACTION_USER_LOGOUT = createAction(
  '[User State] Logout'
);
