import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {Pageable} from '../../../shared/model/pageable.interface';
import {RequestParam} from '../../../shared/model/request.interface';
import {User} from '../users.interface';
import {UsersService} from '../users.service';
import {userActions, userColumns} from './users-table.const';

@Component({
  selector: 'cas-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input()
  filters!: FormGroup;

  data: Pageable<User> = {};
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
      tap((filters: any) => {
        this.requestParam.page = 0;
        this.requestParam.size = filters.size;
        this.requestParam.search = filters.search;
      }),
      tap(() => this.getUsers())
    ).subscribe();
  }

  getUsers(): void {
    this.usersService.getUsersPage(this.requestParam).pipe(
      tap((response: Pageable<User>) => this.data = response),
    ).subscribe();
  }

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.getUsers();
  }
}
