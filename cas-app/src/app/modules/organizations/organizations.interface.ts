import {Auditable} from '../../shared/model/auditable.interface';
import {ScopeType} from '../../shared/model/types.interface';
import {Privilege} from '../privileges/privileges.interface';
import {Role} from '../roles/roles.interface';
import {User} from '../users/users.interface';

export interface Organization extends Auditable {

  id: string;

  scope: ScopeType;

  name: string;

  code: string;

  description: string;

  icon: string;

  active: boolean;

  parentId: string;

  organizations: Organization[];

  roles: Role[];

  users: User[];

  privileges: Privilege[];
}
