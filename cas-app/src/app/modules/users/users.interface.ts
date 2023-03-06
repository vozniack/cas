import {Auditable} from '../../shared/model/auditable.interface';
import {ScopeType} from '../../shared/model/types.interface';

export interface User extends Auditable {

  id: string;

  scope: ScopeType;

  email: string;

  password: string;

  firstName: string;

  lastName: string;

  active: boolean;

  organizations: UserOrganization[];
}

export interface UserOrganization {

  id: string;

  code: string;
}
