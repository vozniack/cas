import {ScopeType} from "../../shared/model/types.interface";
import {Auditable} from "../../shared/model/auditable.interface";

export interface Role extends Auditable {

  id: string;

  scope: ScopeType;

  name: string;

  description: string;
}
