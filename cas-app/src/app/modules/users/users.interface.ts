import {ScopeType} from "../../shared/model/types.interface";
import {Auditable} from "../../shared/model/auditable.interface";
import {Role} from "../roles/roles.interface";

export interface User extends Auditable {

  id: string;

  scope: ScopeType;

  email: string;

  password: string;

  firstName: string;

  lastName: string;

  roles: Role[];
}
