import {Component, Input} from '@angular/core';
import {Organization} from '../../../organizations/organizations.interface';
import {User, UserPrivileges} from '../../users.interface';

@Component({
  selector: 'cas-user-privileges',
  templateUrl: './user-privileges.component.html',
  styleUrls: ['./user-privileges.component.scss']
})
export class UserPrivilegesComponent {

  @Input()
  user!: User;

  @Input()
  userPrivileges!: UserPrivileges;

  @Input()
  selectedOrganization!: Organization;
}
