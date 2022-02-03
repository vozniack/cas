import {Component, Input} from '@angular/core';
import {Role} from "../../../../modules/roles/roles.interface";

@Component({
  selector: 'cas-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {

  @Input()
  role!: Role;
}
