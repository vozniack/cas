import {Component, Input} from '@angular/core';
import {Role} from '../../roles.interface';

@Component({
  selector: 'cas-roles-list-node',
  templateUrl: './roles-list-node.component.html',
  styleUrls: ['./roles-list-node.component.scss']
})
export class RolesListNodeComponent {

  @Input()
  role!: Role;
}
