import {Component, Input} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {privilegeActions, privilegeColumns} from "./privileges-table.const";
import {TableAction} from "../../../shared/components/table/table.interface";
import {Privilege} from "../privileges.interface";

@Component({
  selector: 'cas-privileges-table',
  templateUrl: './privileges-table.component.html',
  styleUrls: ['./privileges-table.component.scss']
})
export class PrivilegesTableComponent {

  @Input()
  data: Pageable<Privilege> = {}

  @Input()
  requestParam!: RequestParam;

  @Input()
  refresh!: Subject<RequestParam>;

  columns = privilegeColumns;
  actions = privilegeActions;

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.refresh.next(this.requestParam);
  }

  onActionActive(tableAction: TableAction): void {
  }
}
