import {AppState, PageState, ResourceState, UserState} from './app.state';

/* Initial app state */

export const initialAppState = (): AppState => {
  return {
    page: dashboardPageState,
    user: emptyUser,
    resource: emptyResource
  };
};

/* Empty states */

export const emptyUser: UserState = {
  token: undefined
};

export const emptyResource: ResourceState = {
  name: undefined,
  id: undefined,
  payload: undefined
};

/* Page states */

export const dashboardPageState: PageState = {
  title: 'Dashboard',
  icon: 'home',
  link: 'dashboard'
};

export const organizationsPageState: PageState = {
  title: 'Organizations',
  icon: 'briefcase',
  link: 'organizations',
};

export const usersPageState: PageState = {
  title: 'Users',
  icon: 'user',
  link: 'users',
};

export const sandboxState: PageState = {
  title: 'Sandbox',
  icon: 'codesandbox',
  link: 'sandbox',
};

/* Page navigation states */

export const upperPageStates: PageState[] = [
  dashboardPageState,
  organizationsPageState,
  usersPageState,
  sandboxState
];
