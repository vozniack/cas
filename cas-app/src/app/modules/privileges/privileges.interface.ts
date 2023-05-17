import {Auditable} from '../../shared/model/auditable.interface';
import {ScopeType} from '../../shared/model/types.interface';

export interface Privilege extends Auditable {

  id: string;

  scope: ScopeType;

  name: string;

  code: string;

  description: string;

  index: number;

  parentId: string;

  privileges: Privilege[];

  organizationId: string;
}

export interface MappedPrivilege {

  id: string;

  code: String;
}
