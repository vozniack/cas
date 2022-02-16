import {ScopeType} from "../../shared/model/types.interface";
import {Auditable} from "../../shared/model/auditable.interface";
import { BasicDetails } from "src/app/shared/model/basic-details.interface";

export interface Role extends Auditable {

  id: string;

  scope: ScopeType;

  name: string;

  code: string;

  description: string;

  details: RoleDetails
}

export interface RoleDetails extends BasicDetails {
}
