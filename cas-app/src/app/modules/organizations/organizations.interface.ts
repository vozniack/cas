import {ScopeType} from "../../shared/model/types.interface";
import {Auditable} from "../../shared/model/auditable.interface";

export interface Organization extends Auditable {

  id: string;

  scope: ScopeType;

  name: string;

  code: string;

  description: string;
}
