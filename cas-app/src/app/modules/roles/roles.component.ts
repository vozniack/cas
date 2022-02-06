import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {rolesState} from "../../shared/store/navigation/navigation.const";
import {Pageable} from "../../shared/model/pageable.interface";
import {RequestParam} from "../../shared/model/request.interface";
import {Role} from "./roles.interface";
import {tap} from "rxjs/operators";
import {RolesService} from "./roles.service";
import {Subject} from "rxjs";
import {FormControl} from "@angular/forms";
import {ViewType} from 'src/app/shared/model/types.interface';

@Component({
  selector: 'cas-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  data: Pageable<Role> = {}
  requestParam: RequestParam = {page: 0, size: 10};
  refresh = new Subject<RequestParam>();

  viewType: ViewType = ViewType.TABLE;
  ViewType = ViewType;

  searchFormControl = new FormControl();
  organizationFormControl = new FormControl();
  viewFormControl = new FormControl();

  constructor(private rolesService: RolesService,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: rolesState}));

    this.refresh.pipe(
      tap((requestParam: RequestParam) => this.requestParam = requestParam),
      tap(() => this.getRoles())
    ).subscribe()

    this.searchFormControl.valueChanges.pipe(
      tap((search: string) => this.requestParam.search = search),
      tap(() => this.getRoles())
    ).subscribe();

    this.organizationFormControl.valueChanges.pipe(
      tap((organizationId: string) => this.requestParam.organizationId = organizationId),
      tap(() => this.getRoles())
    ).subscribe();

    this.viewFormControl.valueChanges.pipe(
      tap((viewType: ViewType) => this.viewType = viewType),
      tap(() => this.getRoles())
    ).subscribe();
  }

  getRoles(): void {
    this.rolesService.getRoles(this.requestParam).pipe(
      tap((response: Pageable<Role>) => this.data = response),
    ).subscribe()
  }
}
