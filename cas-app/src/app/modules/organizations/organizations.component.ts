import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {organizationsState} from "../../shared/store/navigation/navigation.const";
import {organizationColumns} from "./organizations.const";
import {Organization} from "./organizations.interface";
import {OrganizationsService} from "./organizations.service";
import {Pageable} from "../../shared/model/pageable.interface";

@Component({
  selector: 'cas-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {

  data: Pageable<Organization> = {}
  columns = organizationColumns;

  constructor(private organizationsService: OrganizationsService,
              private store: Store<NavigationState>,) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: organizationsState}))
    this.getOrganizations();
  }

  getOrganizations(): void {
    this.organizationsService.getOrganizations({page: 0, size: 16})
      .subscribe(response => this.data = response)
  }
}
