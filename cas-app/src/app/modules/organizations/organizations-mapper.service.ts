import {TreeMapper} from "../../shared/components/tree/tree.mapper.service";
import {Organization} from "./organizations.interface";
import {TreeNode} from "../../shared/components/tree/tree.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class OrganizationsMapper implements TreeMapper<Organization> {

  mapToTreeNodes(organizations: Organization[]): TreeNode<Organization>[] {
    return organizations.filter(organization => organization.parentId == null).map(organization => this.mapOrganizationToTreeNode(organization));
  }

  private mapOrganizationToTreeNode(organization: Organization): TreeNode<Organization> {
    return {
      icon: 'briefcase',
      label: organization.name,
      description: organization.description,
      badge: organization.code,
      children: organization.organizations.map(organization => this.mapOrganizationToTreeNode(organization)),
      data: organization
    }
  }
}
