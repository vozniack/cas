import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Pageable} from "../../../shared/model/pageable.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {privilegeActions, privilegeColumns} from "./privileges-table.const";
import {Privilege} from "../privileges.interface";
import {FormGroup} from "@angular/forms";
import {filter, takeUntil, tap} from "rxjs/operators";
import {PrivilegesService} from "../privileges.service";
import {Subject} from "rxjs";
import {ViewType} from "../../../shared/model/types.interface";

@Component({
  selector: 'cas-privileges-table',
  templateUrl: './privileges-table.component.html',
  styleUrls: ['./privileges-table.component.scss']
})
export class PrivilegesTableComponent implements OnInit, OnDestroy {

  @Input()
  filters!: FormGroup;

  data: Pageable<Privilege> = {}
  requestParam: RequestParam = {page: 0, size: 10};

  columns = privilegeColumns;
  actions = privilegeActions;

  ngDestroyed$ = new Subject<boolean>();

  constructor(private privilegesService: PrivilegesService) {
    this.getPrivileges();
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
      tap(() => this.getPrivileges())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  getPrivileges(): void {
    this.privilegesService.getPrivileges(this.requestParam).pipe(
      tap((response: Pageable<Privilege>) => this.data = response),
    ).subscribe()
  }

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.getPrivileges();
  }
}
