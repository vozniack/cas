import {Component, Input} from '@angular/core';
import {User} from "../../../users/users.interface";
import {fadeInAnimation} from "../../../../shared/animations/fade-in-animation";
import {ListNode} from "../../../../shared/components/list/list.interface";
import {UsersMapper} from "../../../users/users-mapper.service";
import {ListMapper} from "../../../../shared/components/list/list.mapper";

@Component({
  selector: 'cas-organization-users',
  templateUrl: './organization-users.component.html',
  styleUrls: ['./organization-users.component.scss'],
  animations: [fadeInAnimation]
})
export class OrganizationUsersComponent {

  @Input()
  users: User[] = [];
  nodes: ListNode<User>[] = [];

  mapper: ListMapper<User> = new UsersMapper();

  ngOnInit(): void {
    this.nodes = this.mapper.mapToListNodes(this.users);
  }
}
