import {Component, Input, OnInit} from '@angular/core';
import {Privilege} from "../../../privileges/privileges.interface";
import {TreeNode} from "../../../../shared/components/tree/tree.interface";
import {PrivilegesMapper} from "../../../privileges/privileges-mapper.service";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";
import {TreeMapper} from "../../../../shared/components/tree/tree.mapper.service";

@Component({
  selector: 'cas-organization-privileges',
  templateUrl: './organization-privileges.component.html',
  styleUrls: ['./organization-privileges.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationPrivilegesComponent implements OnInit {

  @Input()
  privileges!: Privilege[];
  nodes: TreeNode<Privilege>[] = [];

  mapper: TreeMapper<Privilege> = new PrivilegesMapper();

  ngOnInit(): void {
    this.nodes = this.mapper.mapToTreeNodes(this.privileges);
  }
}
