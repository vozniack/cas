import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {usersState} from "../../shared/store/navigation/navigation.const";
import {Pageable} from "../../shared/model/pageable.interface";
import {RequestParam} from "../../shared/model/request.interface";
import {tap} from "rxjs/operators";
import {UsersService} from "./users.service";
import {User} from "./users.interface";
import {Subject} from "rxjs";
import {FormControl} from "@angular/forms";
import {ViewType} from 'src/app/shared/model/types.interface';

@Component({
  selector: 'cas-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  data: Pageable<User> = {}
  requestParam: RequestParam = {page: 0, size: 10};
  refresh = new Subject<RequestParam>();

  viewType: ViewType = ViewType.TABLE;
  ViewType = ViewType;

  searchFormControl = new FormControl();
  organizationFormControl = new FormControl();
  viewFormControl = new FormControl();

  constructor(private usersService: UsersService,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: usersState}));

    this.refresh.pipe(
      tap((requestParam: RequestParam) => this.requestParam = requestParam),
      tap(() => this.getUsers())
    ).subscribe()

    this.searchFormControl.valueChanges.pipe(
      tap((search: string) => this.requestParam.search = search),
      tap(() => this.getUsers())
    ).subscribe();

    this.organizationFormControl.valueChanges.pipe(
      tap((organizationId: string) => this.requestParam.organizationId = organizationId),
      tap(() => this.getUsers())
    ).subscribe();

    this.viewFormControl.valueChanges.pipe(
      tap((viewType: ViewType) => this.viewType = viewType),
      tap(() => this.getUsers())
    ).subscribe();
  }

  getUsers(): void {
    this.usersService.getUsers(this.requestParam).pipe(
      tap((response: Pageable<User>) => this.data = response),
    ).subscribe()
  }
}
