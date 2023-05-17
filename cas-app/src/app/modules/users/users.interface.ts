import {Auditable} from '../../shared/model/auditable.interface';
import {ScopeType} from '../../shared/model/types.interface';
import {MappedPrivilege, Privilege} from '../privileges/privileges.interface';

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

  name: string;

  code: string;

  icon: string;
}

export interface UserPrivileges {

  mappedPrivileges: MappedPrivilege[];

  privileges: Privilege[];
}
