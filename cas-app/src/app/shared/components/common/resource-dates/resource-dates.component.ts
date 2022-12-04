import {Component, Input} from '@angular/core';
import {Organization} from '../../../../modules/organizations/organizations.interface';
import {User} from '../../../../modules/users/users.interface';
import {Role} from '../../../../modules/roles/roles.interface';
import {Privilege} from '../../../../modules/privileges/privileges.interface';

@Component({
  selector: 'cas-resource-dates',
  templateUrl: './resource-dates.component.html',
  styleUrls: ['./resource-dates.component.scss']
})
export class ResourceDatesComponent {

  @Input()
  resource!: Organization | User | Role | Privilege;
}
