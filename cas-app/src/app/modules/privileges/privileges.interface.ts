import {ScopeType} from "../../shared/model/types.interface";
import {Auditable} from "../../shared/model/auditable.interface";
import {BasicDetails} from "../../shared/model/basic-details.interface";

export interface Privilege extends Auditable {

  id: string;

  scope: ScopeType;

  name: string;

  code: string;

  description: string;

  parentId: string;

  privileges: Privilege[];

  details: PrivilegeDetails;
}

export interface PrivilegeDetails extends BasicDetails {

}
