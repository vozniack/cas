import {Component} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {Pageable} from "../../../shared/model/pageable.interface";
import {User} from "../../users/users.interface";
import {UsersService} from "../../users/users.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'cas-internal-users',
  templateUrl: './internal-users.component.html',
  styleUrls: ['./internal-users.component.scss'],
  animations: [fadeInAnimation]
})
export class InternalUsersComponent {

  users!: Pageable<User>;

  constructor(private usersService: UsersService) {
    this.usersService.getInternalUsers({page: 0, size: 64}).pipe(
      tap((users: Pageable<User>) => this.users = users)
    ).subscribe();
  }
}
