import {Component, Input} from '@angular/core';
import {User} from '../users.interface';

@Component({
  selector: 'cas-users-bar',
  templateUrl: './users-bar.component.html',
  styleUrls: ['./users-bar.component.scss']
})
export class UsersBarComponent {

  @Input()
  users!: User[];

  @Input()
  limit = 10;
}
