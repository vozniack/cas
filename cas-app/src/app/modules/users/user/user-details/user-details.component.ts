import {Component, Input} from '@angular/core';
import {User} from '../../users.interface';

@Component({
  selector: 'cas-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  @Input()
  user!: User;
}
