import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {roleActions, roleColumns} from "./roles-table.const";
import {Pageable} from "../../../shared/model/pageable.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {Role} from "../roles.interface";
import {TableAction} from "../../../shared/components/table/table.interface";
import {filter, takeUntil, tap} from "rxjs/operators";
import {FormGroup} from "@angular/forms";
import {RolesService} from "../roles.service";
import {ViewType} from "../../../shared/model/types.interface";

@Component({
  selector: 'cas-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss']
})
export class RolesTableComponent implements OnInit, OnDestroy {

  @Input()
  filters!: FormGroup;

  data: Pageable<Role> = {}
  requestParam: RequestParam = {page: 0, size: 10};

  columns = roleColumns;
  actions = roleActions;

  ngDestroyed$ = new Subject<boolean>();

  constructor(private rolesService: RolesService) {
    this.getRoles();
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(
      takeUntil(this.ngDestroyed$),
      filter((filters: any) => filters.view === ViewType.TABLE),
      tap((filters: any) => {
        this.requestParam.page = 0;
        this.requestParam.search = filters.search;
        this.requestParam.organizationId = filters.organization;
      }),
      tap(() => this.getRoles())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  getRoles(): void {
    this.rolesService.getRoles(this.requestParam).pipe(
      tap((response: Pageable<Role>) => this.data = response),
    ).subscribe()
  }

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.getRoles();
  }

  onActionActive(tableAction: TableAction): void {
  }
}
