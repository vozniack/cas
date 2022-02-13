import {Privilege} from "../../modules/privileges/privileges.interface";
import {TreeNode} from "../components/tree/tree.interface";
import {Organization} from "../../modules/organizations/organizations.interface";

export function mapOrganizationsToTreeNodes(organizations: Organization[]): TreeNode[] {
  return organizations.filter(organization => organization.parentId == null).map(organization => mapOrganizationToTreeNode(organization));
}

export function mapOrganizationToTreeNode(organization: Organization): TreeNode {
  return {
    label: organization.name,
    description: organization.description,
    badge: organization.code,
    children: organization.organizations.map(organization => mapOrganizationToTreeNode(organization))
  }
}

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
