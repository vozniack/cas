import {ActionState, AppState, PageState, ResourceState, UserState} from "./app.state";

/* Initial app state */

export const initialAppState = (): AppState => {
  return {
    page: dashboardPageState,
    resource: emptyResource,
    user: emptyUser,
    actions: emptyActions
  }
}

/* Empty states */

export const emptyResource: ResourceState = {
  name: undefined,
  id: undefined
}

export const emptyUser: UserState = {
  token: undefined
}

export const emptyActions: ActionState = {
  edit: false
}

/* Page states */

export const dashboardPageState: PageState = {
  title: 'Dashboard',
  subtitle: 'Manage your security',
  icon: 'home',
  link: 'dashboard'
}

export const organizationsPageState: PageState = {
  title: 'Organizations',
  subtitle: 'Manage your organizations',
  icon: 'briefcase',
  link: 'organizations',
}

export const usersPageState: PageState = {
  title: 'Users',
  subtitle: 'Manage your users',
  icon: 'user',
  link: 'users',
}

export const rolesPageState: PageState = {
  title: 'Roles',
  subtitle: 'Manage your roles',
  icon: 'lock',
  link: 'roles',
}

export const privilegesPageState: PageState = {
  title: 'Privileges',
  subtitle: 'Manage your privileges',
  icon: 'key',
  link: 'privileges',
}

export const adminPageState: PageState = {
  title: 'Admin panel',
  subtitle: 'Check internal resources',
  icon: 'aperture',
  link: 'admin',
}

/* Page navigation states */

export const upperPageStates: PageState[] = [
  dashboardPageState,
  organizationsPageState,
  usersPageState,
  rolesPageState,
  privilegesPageState
]

export const lowerPageStates: PageState[] = [
  adminPageState
]
