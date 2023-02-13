import {Component, Input} from '@angular/core';
import {Role} from '../roles.interface';

@Component({
  selector: 'cas-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent {

  @Input()
  roles!: Role[];
}
