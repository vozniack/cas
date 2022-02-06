import {Component, Input} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {User} from "../users.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";

@Component({
  selector: 'cas-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [fadeInAnimation]
})
export class UsersListComponent {

  @Input()
  data: Pageable<User> = {}

  @Input()
  requestParam!: RequestParam;

  @Input()
  refresh!: Subject<RequestParam>;
}
