import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ColumnType, TableColumn} from "./table.interface";
import {Pageable} from "../../model/pageable.interface";
import {fadeInAnimation} from "../../animations/fade-in-animation";
import {fadeOutAnimation} from "../../animations/fade-out-animation";
import {RequestParam, SortDirection} from "../../model/request.interface";
import {FormControl} from "@angular/forms";
import {tap} from "rxjs/operators";

@Component({
  selector: 'cas-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class TableComponent {

  @Input()
  data: Pageable<any> = {};

  @Input()
  columns: TableColumn[] = [];

  @Input()
  requestParam: RequestParam = {page: 0, size: 16};

  @Output()
  requestParamChange = new EventEmitter<RequestParam>();

  searchFormControl = new FormControl(null);

  columnType = ColumnType;

  constructor() {
    this.searchFormControl.valueChanges.pipe(
      tap((search: string) => this.requestParam.search = search),
      tap(() => this.requestParamChange.emit(this.requestParam))
    ).subscribe()
  }

  sort(tableColumn: TableColumn): void {
    if (tableColumn.sortable) {
      if (this.requestParam?.sort != null && this.requestParam.sort.field === tableColumn.field) {
        switch (this.requestParam.sort.direction) {
          case SortDirection.ASC:
            this.requestParam.sort.direction = SortDirection.DESC;
            break;

          case SortDirection.DESC:
            this.requestParam.sort = undefined;
            break;
        }
      } else {
        this.requestParam.sort = {field: tableColumn.field, direction: SortDirection.ASC};
      }

      this.requestParamChange.emit(this.requestParam);
    }
  }

  getFieldValue(row: any, tableColumn: TableColumn): string {
    return tableColumn?.field?.split('.').reduce((o, key) => o[key], row);
  }
}
