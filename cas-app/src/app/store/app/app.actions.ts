import {createAction, props} from '@ngrx/store';
import {PageState, ResourceState, UserState} from './app.state';

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

export const ACTION_RESULT_USER_LOGGED_OUT = createAction(
  '[App][User] Logged out'
);

/* Resource */

export const ACTION_INIT_RESOURCE = createAction(
  '[App][Resource] Set initial resource state', props<{ resource: ResourceState }>()
);

export const ACTION_SET_PAYLOAD = createAction(
  '[App][Resource] Set resource payload state', props<{ payload: any }>()
);

export const ACTION_VIEW_RESOURCE = createAction(
  '[App][Resource] Redirect to resource view page', props<{ resource: ResourceState }>()
);

export const ACTION_RESULT_RESOURCE_REDIRECTED = createAction(
  '[App][Resource] Redirected to resource page'
);
