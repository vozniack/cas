import {ScopeType} from "../../shared/model/types.interface";

export interface Privilege {

  id: string;

  scope: ScopeType;

  name: string;

  code: string;

  description: string;
}
