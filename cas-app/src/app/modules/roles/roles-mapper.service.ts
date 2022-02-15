import {ListMapper} from "../../shared/components/list/list.mapper";
import {Role} from "./roles.interface";
import {ListNode} from "../../shared/components/list/list.interface";

export class RolesMapper extends ListMapper<Role> {

  mapToListNodes(roles: Role[]): ListNode<Role>[] {
    return roles.map(role => RolesMapper.mapToListNode(role));
  }

  private static mapToListNode(role: Role): ListNode<Role> {
    return {
      label: role.name,
      description: role.description,
      badges: [],
      data: role
    }
  }
}
