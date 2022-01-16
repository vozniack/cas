import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ColumnType, TableAction, TableColumn} from "./table.interface";
import {Pageable} from "../../model/pageable.interface";
import {fadeInAnimation} from "../../animations/fade-in-animation";
import {fadeOutAnimation} from "../../animations/fade-out-animation";
import {RequestParam, SortDirection} from "../../model/request.interface";
import {FormControl} from "@angular/forms";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'cas-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class TableComponent {

  @Input()
  set data(data: Pageable<any>) {
    this._data = data;
    this.totalPages = data.totalPages!!;
  }

  @Input()
  columns: TableColumn[] = [];

  @Input()
  actions: TableAction[] = [];

  @Input()
  requestParam!: RequestParam;

  @Output()
  requestParamChange = new EventEmitter<RequestParam>();

  @Output()
  actionActive = new EventEmitter<TableAction>();

  _data: Pageable<any> = {};
  totalPages!: number;

  searchFormControl = new FormControl(null);

  columnType = ColumnType;

  constructor() {
    this.onSearchChange();

    Observable.create(this.data).pipe(
      tap((data: Pageable<any>) => this.totalPages = data.totalPages!!)
    ).subscribe()
  }

  /* Changes */

  onSearchChange(): void {
    this.searchFormControl.valueChanges.pipe(
      tap((search: string) => this.requestParam.search = search),
      tap(() => this.requestParamChange.emit(this.requestParam))
    ).subscribe()
  }

  onSortChange(tableColumn: TableColumn): void {
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

  onPageChange(page: number): void {
    this.requestParam.page = page;
    this.requestParamChange.emit(this.requestParam);
  }

  onActionActive(tableAction: TableAction, data: any): void {
    this.actionActive.emit({...tableAction, data: data})
  }

  /* Getter */

  getFieldValue(row: any, tableColumn: TableColumn): string {
    return tableColumn?.field?.split('.').reduce((o, key) => o[key], row);
  }
}
