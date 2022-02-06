import {NavigationState} from "./navigation.state";

export const dashboardState: NavigationState = {
  title: 'Dashboard',
  subtitle: 'Manage your security',
  icon: 'home',
  link: 'dashboard'
}

export const organizationsState: NavigationState = {
  title: 'Organizations',
  subtitle: 'Manage your organizations',
  icon: 'briefcase',
  link: 'organizations'
}

export const usersState: NavigationState = {
  title: 'Users',
  subtitle: 'Manage your users',
  icon: 'user',
  link: 'users'
}

export const rolesState: NavigationState = {
  title: 'Roles',
  subtitle: 'Manage your roles',
  icon: 'lock',
  link: 'roles'
}

export const privilegesState: NavigationState = {
  title: 'Privileges',
  subtitle: 'Manage your privileges',
  icon: 'key',
  link: 'privileges'
}

export const adminState: NavigationState = {
  title: 'Administrator panel',
  subtitle: 'Check internal resources',
  icon: 'aperture',
  link: 'admin'
}

export const upperNavigationStates: NavigationState[] = [
  dashboardState,
  organizationsState,
  usersState,
  rolesState,
  privilegesState
]

export const lowerNavigationStates: NavigationState[] = [
  adminState
]
