import {Component, Input, OnInit} from '@angular/core';
import {Role} from "../../../roles/roles.interface";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";
import {RolesMapper} from "../../../roles/roles-mapper.service";
import {ListNode} from "../../../../shared/components/list/list.interface";
import {ListMapper} from "../../../../shared/components/list/list.mapper";

@Component({
  selector: 'cas-organization-roles',
  templateUrl: './organization-roles.component.html',
  styleUrls: ['./organization-roles.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationRolesComponent implements OnInit {

  @Input()
  roles: Role[] = [];
  nodes: ListNode<Role>[] = [];

  mapper: ListMapper<Role> = new RolesMapper();

  ngOnInit(): void {
    this.nodes = this.mapper.mapToListNodes(this.roles);
  }
}
