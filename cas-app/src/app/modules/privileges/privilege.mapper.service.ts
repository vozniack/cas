import {TreeMapper} from "../../shared/utils/mapper/tree-mapper.service";
import {Privilege} from "./privileges.interface";
import {TreeNode} from "../../shared/components/tree/tree.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class PrivilegeMapperService implements TreeMapper<Privilege> {

  mapToTreeNodes(privileges: Privilege[]): TreeNode<Privilege>[] {
    return privileges.filter(privilege => privilege.parentId == null).map(privilege => this.mapPrivilege(privilege));
  }

  private mapPrivilege(privilege: Privilege): TreeNode<Privilege> {
    return {
      label: privilege.name,
      description: privilege.description,
      badge: privilege.code,
      children: privilege.privileges.map(privilege => this.mapPrivilege(privilege)),
      data: privilege
    }
  }
}
