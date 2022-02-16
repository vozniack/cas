import {ScopeType} from "../../shared/model/types.interface";
import {Auditable} from "../../shared/model/auditable.interface";
import {Role} from "../roles/roles.interface";
import {User} from "../users/users.interface";
import {Privilege} from "../privileges/privileges.interface";

export interface Organization extends Auditable {

  id: string;

  scope: ScopeType;

  name: string;

  code: string;

  description: string;

  parentId: string;

  organizations: Organization[];

  roles: Role[];

  users: User[];

  privileges: Privilege[];

  details: OrganizationDetails;
}

export interface OrganizationDetails {

  users: number;

  roles: number;

  privileges: number;
}
