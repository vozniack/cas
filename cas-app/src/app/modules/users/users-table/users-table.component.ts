import {Component, Input} from '@angular/core';
import {userActions, userColumns} from "./users-table.const";
import {Pageable} from "../../../shared/model/pageable.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {User} from "../users.interface";
import {TableAction} from "../../../shared/components/table/table.interface";

@Component({
  selector: 'cas-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  @Input()
  data: Pageable<User> = {}

  @Input()
  requestParam!: RequestParam;

  @Input()
  refresh!: Subject<RequestParam>;

  columns = userColumns;
  actions = userActions;

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.refresh.next(this.requestParam);
  }

  onActionActive(tableAction: TableAction): void {
  }
}
