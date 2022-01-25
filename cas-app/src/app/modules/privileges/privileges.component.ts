import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {privilegesState} from "../../shared/store/navigation/navigation.const";
import {tap} from "rxjs/operators";
import {Pageable} from "../../shared/model/pageable.interface";
import {RequestParam} from "../../shared/model/request.interface";
import {TableAction} from "../../shared/components/table/table.interface";
import {PrivilegesService} from "./privileges.service";
import {Privilege} from "./privileges.interface";
import {privilegeActions, privilegeColumns} from "./privileges.const";

@Component({
  selector: 'cas-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent {

  data: Pageable<Privilege> = {}
  columns = privilegeColumns;
  actions = privilegeActions;

  requestParam: RequestParam = {page: 0, size: 10};

  constructor(private privilegesService: PrivilegesService,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: privilegesState}));
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

  onActionActive(tableAction: TableAction): void {
  }
}
