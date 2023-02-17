import {Auditable} from '../../shared/model/auditable.interface';
import {ScopeType} from '../../shared/model/types.interface';

export interface Role extends Auditable {

  id: string;

  scope: ScopeType;

  name: string;

  code: string;

  description: string;

  organizationId: string;
}
