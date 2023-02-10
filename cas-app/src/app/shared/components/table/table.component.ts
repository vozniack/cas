import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {ACTION_VIEW_RESOURCE} from '../../../store/app/app.actions';
import {fadeInAnimation} from '../../animations/fade-in-animation';
import {fadeOutAnimation} from '../../animations/fade-out-animation';
import {Pageable} from '../../model/pageable.interface';
import {RequestParam, SortDirection} from '../../model/request.interface';
import {ColumnType, TableAction, TableColumn} from './table.interface';

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

  @Input()
  searchFormControl?: FormControl;

  @Input()
  resourceName!: 'organizations' | 'users' | 'roles' | 'privileges';

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

  constructor(private store: Store) {
  }

  /* Changes */

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
    if (tableAction.custom) {
      this.actionActive.emit({...tableAction, data: data})
    } else {
      switch (tableAction.name) {
        case 'VIEW':
          this.store.dispatch(ACTION_VIEW_RESOURCE({
            resource: {
              name: this.resourceName,
              id: data.id,
              payload: data
            }
          }))
          break;

        case 'REMOVE':
          break;

        default:
          this.actionActive.emit({...tableAction, data: data})
          break;
      }
    }
  }

  /* Getter */

  getFieldValue(row: any, field?: string): string {
    return field?.split('.').reduce((o, key) => o[key], row);
  }
}
