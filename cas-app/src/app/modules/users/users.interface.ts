import {ScopeType} from "../../shared/model/types.interface";
import {Auditable} from "../../shared/model/auditable.interface";
import {Role} from "../roles/roles.interface";
import {BasicDetails} from "../../shared/model/basic-details.interface";

export interface User extends Auditable {

  id: string;

  scope: ScopeType;

  email: string;

  password: string;

  firstName: string;

  lastName: string;

  roles: Role[];

  details: UserDetails;
}

export interface UserDetails extends BasicDetails {

}
