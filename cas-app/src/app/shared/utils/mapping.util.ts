import {Privilege} from "../../modules/privileges/privileges.interface";
import {TreeNode} from "../components/tree/tree.interface";

export function mapToTreeNode(privilege: Privilege): TreeNode {
  return {
    label: privilege.name,
    description: privilege.description,
    badge: privilege.code,
    children: privilege.privileges.map(privilege => mapToTreeNode(privilege))
  }
}
