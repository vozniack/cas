import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {rolesState} from "../../shared/store/navigation/navigation.const";
import {Pageable} from "../../shared/model/pageable.interface";
import {RequestParam} from "../../shared/model/request.interface";
import {Role} from "./roles.interface";
import {roleActions, roleColumns} from "./roles.const";
import {tap} from "rxjs/operators";
import {TableAction} from "../../shared/components/table/table.interface";
import {RolesService} from "./roles.service";

@Component({
  selector: 'cas-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  data: Pageable<Role> = {}
  columns = roleColumns;
  actions = roleActions;

  requestParam: RequestParam = {page: 0, size: 10};

  constructor(private rolesService: RolesService,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: rolesState}));
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
