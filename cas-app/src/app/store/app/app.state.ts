export interface AppState {

  page: PageState;

  resource: ResourceState;

  user: UserState;

  actions: ActionState;
}

export interface PageState {

  title: string;

  subtitle: string;

  icon: string;

  link: string;
}

export interface ResourceState {

  name: 'organizations' | 'users' | 'roles' | 'privileges' | undefined;

  id: string | undefined;
}

export interface ActionState {

  edit: boolean;
}

export interface UserState {

  token?: string;
}
