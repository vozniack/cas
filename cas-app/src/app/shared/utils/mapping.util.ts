import {Privilege} from "../../modules/privileges/privileges.interface";
import {TreeNode} from "../components/tree/tree.interface";

export function mapPrivilegesToTreeNodes(privileges: Privilege[]): TreeNode[] {
  return privileges.filter(privilege => privilege.parentId == null).map(privilege => mapPrivilegeToTreeNode(privilege));
}

export function mapPrivilegeToTreeNode(privilege: Privilege): TreeNode {
  return {
    label: privilege.name,
    description: privilege.description,
    badge: privilege.code,
    children: privilege.privileges.map(privilege => mapPrivilegeToTreeNode(privilege))
  }
}
