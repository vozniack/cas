import {Component, Input} from '@angular/core';
import {User} from '../../users.interface';

@Component({
  selector: 'cas-users-list-node',
  templateUrl: './users-list-node.component.html',
  styleUrls: ['./users-list-node.component.scss']
})
export class UsersListNodeComponent {

  @Input()
  user!: User;

  isActive(): boolean {
    return this.user.active;
  }
}
