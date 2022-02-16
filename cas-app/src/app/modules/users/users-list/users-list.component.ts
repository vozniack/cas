import {Component, Input} from '@angular/core';
import {fadeInAnimation} from "../../../shared/animations/fade-in-animation";
import {FormGroup} from "@angular/forms";
import {User} from "../users.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {Subject} from "rxjs";
import {UsersService} from "../users.service";
import {filter, takeUntil, tap} from "rxjs/operators";
import {ViewType} from "../../../shared/model/types.interface";
import {ListNode} from "../../../shared/components/list/list.interface";
import {UsersMapper} from "../users-mapper.service";
import {ListMapper} from "../../../shared/components/list/list.mapper";

@Component({
  selector: 'cas-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [fadeInAnimation]
})
export class UsersListComponent {

  @Input()
  filters!: FormGroup;

  itemSelect = new Subject<User>();
  selectedUser?: User;

  data: ListNode<User>[] = [];
  requestParam: RequestParam = {};

  mapper: ListMapper<User> = new UsersMapper();

  ngDestroyed$ = new Subject<boolean>();

  constructor(private usersService: UsersService) {
    this.getUsers();

    this.itemSelect.pipe(
      takeUntil(this.ngDestroyed$),
      tap((user: User) => this.selectedUser = user)
    ).subscribe();
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(
      takeUntil(this.ngDestroyed$),
      filter((filters: any) => filters.view === ViewType.LIST),
      tap((filters: any) => {
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
    this.usersService.getUsersList(this.requestParam).pipe(
      tap((response: User[]) => this.data = this.mapper.mapToListNodes(response)),
    ).subscribe()
  }
}
