import {Component, Input} from '@angular/core';
import {ColumnType, TableColumn} from "./table.interface";
import {Pageable} from "../../model/pageable.interface";
import {fadeInAnimation} from "../../animations/fade-in-animation";

@Component({
  selector: 'cas-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [fadeInAnimation]
})
export class TableComponent {

  @Input()
  data: Pageable<any> = {};

  @Input()
  columns: TableColumn[] = [];

  columnType = ColumnType;

  getFieldValue(row: any, tableColumn: TableColumn) {
    return tableColumn?.field?.split('.').reduce((o, key) => o[key], row);
  }
}
