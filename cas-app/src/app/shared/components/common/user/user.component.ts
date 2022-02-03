import {Component, Input} from '@angular/core';
import {User} from "../../../../modules/users/users.interface";

@Component({
  selector: 'cas-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input()
  user!: User;
}
