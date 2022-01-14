import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableAction} from "../table.interface";

@Component({
  selector: 'cas-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent {

  @Input()
  actions!: TableAction[];

  @Output()
  actionActive = new EventEmitter<TableAction>();
}
