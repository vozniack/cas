import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnType, TableAction, TableColumn} from "./table.interface";
import {Pageable} from "../../model/pageable.interface";
import {fadeInAnimation} from "../../animations/fade-in-animation";
import {fadeOutAnimation} from "../../animations/fade-out-animation";
import {RequestParam, SortDirection} from "../../model/request.interface";
import {FormControl} from "@angular/forms";
import {tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'cas-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class TableComponent implements OnInit {

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

  @Input()
  searchFormControl?: FormControl;

  @Input()
  scopeFilter = true;

  @Input()
  searchFilter = true;

  @Input()
  addButton = true;

  @Output()
  requestParamChange = new EventEmitter<RequestParam>();

  @Output()
  actionActive = new EventEmitter<TableAction>();

  paginationReset = new Subject();

  _data: Pageable<any> = {};
  totalPages!: number;

  columnType = ColumnType;

  ngOnInit(): void {
    this.onSearchChange();
  }

  /* Changes */

  onSearchChange(): void {
    this.searchFormControl?.valueChanges.pipe(
      tap((search: string) => this.requestParamChange.emit({...this.requestParam, page: 0, search: search})),
      tap(() => this.paginationReset.next())
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
    this.requestParamChange.emit({...this.requestParam, page: page});
  }

  onActionActive(tableAction: TableAction, data: any): void {
    this.actionActive.emit({...tableAction, data: data})
  }

  /* Getter */

  getFieldValue(row: any, tableColumn: TableColumn): string {
    return tableColumn?.field?.split('.').reduce((o, key) => o[key], row);
  }
}
