import {Component, Input} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {Organization} from "../organizations.interface";
import {organizationActions, organizationColumns} from "./organizations-table.const";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {TableAction} from "../../../shared/components/table/table.interface";

@Component({
  selector: 'cas-organizations-table',
  templateUrl: './organizations-table.component.html',
  styleUrls: ['./organizations-table.component.scss']
})
export class OrganizationsTableComponent {

  @Input()
  data: Pageable<Organization> = {}

  @Input()
  requestParam!: RequestParam

  @Input()
  refresh!: Subject<RequestParam>;

  columns = organizationColumns;
  actions = organizationActions;

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.refresh.next(this.requestParam);
  }

  onActionActive(tableAction: TableAction): void {
  }
}
