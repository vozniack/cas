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

export const rolesPageState: PageState = {
  title: 'Roles',
  icon: 'lock',
  link: 'roles',
};

export const privilegesPageState: PageState = {
  title: 'Privileges',
  icon: 'key',
  link: 'privileges',
};

/* Page navigation states */

export const upperPageStates: PageState[] = [
  dashboardPageState,
  organizationsPageState,
  usersPageState,
  rolesPageState,
  privilegesPageState
];

export const lowerPageStates: PageState[] = [];
