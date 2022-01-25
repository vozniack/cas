import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../../shared/store/navigation/navigation.actions";
import {organizationsState} from "../../../shared/store/navigation/navigation.const";
import {organizationActions, organizationColumns} from "./organizations.const";
import {Organization} from "./organizations.interface";
import {OrganizationsService} from "./organizations.service";
import {Pageable} from "../../../shared/model/pageable.interface";
import {RequestParam} from "../../../shared/model/request.interface";
import {tap} from "rxjs/operators";
import {TableAction} from "../../../shared/components/table/table.interface";

@Component({
  selector: 'cas-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {

  data: Pageable<Organization> = {}
  columns = organizationColumns;
  actions = organizationActions;

  requestParam: RequestParam = {page: 0, size: 10};

  constructor(private organizationsService: OrganizationsService,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: organizationsState}));
  }

  getOrganizations(): void {
    this.organizationsService.getOrganizations(this.requestParam).pipe(
      tap((response: Pageable<Organization>) => this.data = response),
    ).subscribe()
  }

  onRequestParamChange(requestParam: RequestParam): void {
    this.requestParam = requestParam;
    this.getOrganizations();
  }

  onActionActive(tableAction: TableAction): void {
  }
}
