import {Component, Input} from '@angular/core';
import {userActions, userColumns} from "./users-table.const";
import {Pageable} from "../../../shared/model/pageable.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {User} from "../users.interface";
import {TableAction} from "../../../shared/components/table/table.interface";
import {FormGroup} from "@angular/forms";
import {UsersService} from "../users.service";
import {filter, takeUntil, tap} from "rxjs/operators";
import {ViewType} from "../../../shared/model/types.interface";

@Component({
  selector: 'cas-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  @Input()
  filters!: FormGroup;

  data: Pageable<User> = {}
  requestParam: RequestParam = {page: 0, size: 10};

  columns = userColumns;
  actions = userActions;

  ngDestroyed$ = new Subject<boolean>();

  constructor(private usersService: UsersService) {
    this.getUsers();
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
      tap(() => this.getUsers())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  getUsers(): void {
    this.usersService.getUsersPage(this.requestParam).pipe(
      tap((response: Pageable<User>) => this.data = response),
    ).subscribe()
  }

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.getUsers();
  }

  onActionActive(tableAction: TableAction): void {
  }
}
