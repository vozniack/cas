import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../../shared/store/navigation/navigation.actions";
import {usersState} from "../../../shared/store/navigation/navigation.const";
import {Pageable} from "../../../shared/model/pageable.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {tap} from "rxjs/operators";
import {TableAction} from "../../../shared/components/table/table.interface";
import {UsersService} from "./users.service";
import {User} from "./users.interface";
import {userActions, userColumns} from "./users.const";

@Component({
  selector: 'cas-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  data: Pageable<User> = {}
  columns = userColumns;
  actions = userActions;

  requestParam: RequestParam = {page: 0, size: 10};

  constructor(private usersService: UsersService,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: usersState}));
  }

  getUsers(): void {
    this.usersService.getUsers(this.requestParam).pipe(
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
