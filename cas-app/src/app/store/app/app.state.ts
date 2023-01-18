import {Organization} from '../../modules/organizations/organizations.interface';
import {User} from '../../modules/users/users.interface';
import {Role} from '../../modules/roles/roles.interface';
import {Privilege} from '../../modules/privileges/privileges.interface';

export interface AppState {

  page: PageState;

  user: UserState;

  resource: ResourceState;
}

export interface PageState {

  title: string;

  icon: string;

  link: string;
}

export interface UserState {

  token?: string;
}

export interface ResourceState {

  name: 'organizations' | 'users' | 'roles' | 'privileges' | undefined;

  id: string | undefined;

  payload: Organization | User | Role | Privilege | undefined;
}
