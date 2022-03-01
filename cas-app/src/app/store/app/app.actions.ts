import {createAction, props} from "@ngrx/store";
import {PageState, ResourceState, UserState} from "./app.state";

/* Page */

export const ACTION_SET_NAVIGATION = createAction(
  '[App][Page] Set page state', props<{ page: PageState }>()
);

/* User */

export const ACTION_USER_LOGIN = createAction(
  '[App][User] Set user state', props<{ user: UserState }>()
);

export const ACTION_USER_LOGOUT = createAction(
  '[App][User] Logout'
);

/* Resource */

export const ACTION_SET_RESOURCE = createAction(
  '[App][Resource] Set resource state', props<{ resource: ResourceState }>()
);

export const ACTION_VIEW_RESOURCE = createAction(
  '[App][Resource] Redirect to resource view page', props<{ resource: ResourceState }>()
);

export const ACTION_EDIT_RESOURCE = createAction(
  '[App][Resource] Redirect to resource edit page', props<{ resource: ResourceState }>()
);

export const ACTION_RESOURCE_REDIRECTED = createAction(
  '[App][Resource] Redirected to resource page'
);

/* Actions */

export const ACTION_ENABLE_EDIT = createAction(
  '[App][Actions] Enable edit button'
);


export const ACTION_DISABLE_EDIT = createAction(
  '[App][Actions] Disable edit button'
);

