import {Component, Input} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {User} from "../users.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";

@Component({
  selector: 'cas-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Input()
  data: Pageable<User> = {}

  @Input()
  requestParam!: RequestParam;

  @Input()
  refresh!: Subject<RequestParam>;
}
