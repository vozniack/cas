import {Component, Input} from '@angular/core';
import {roleActions, roleColumns} from "./roles-table.const";
import {Pageable} from "../../../shared/model/pageable.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {Role} from "../roles.interface";
import {TableAction} from "../../../shared/components/table/table.interface";

@Component({
  selector: 'cas-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss']
})
export class RolesTableComponent {

  @Input()
  data: Pageable<Role> = {}

  @Input()
  requestParam!: RequestParam;

  @Input()
  refresh!: Subject<RequestParam>;

  columns = roleColumns;
  actions = roleActions;

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.refresh.next(this.requestParam);
  }

  onActionActive(tableAction: TableAction): void {
  }
}
