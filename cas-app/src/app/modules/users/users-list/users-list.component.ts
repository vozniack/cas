import {Component, Input} from '@angular/core';
import {User} from '../users.interface';

@Component({
  selector: 'cas-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Input()
  users!: User[];
}
