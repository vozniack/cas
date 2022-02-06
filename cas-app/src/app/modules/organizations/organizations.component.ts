import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {organizationsState} from "../../shared/store/navigation/navigation.const";
import {Organization} from "./organizations.interface";
import {OrganizationsService} from "./organizations.service";
import {Pageable} from "../../shared/model/pageable.interface";
import {RequestParam} from "../../shared/model/request.interface";
import {tap} from "rxjs/operators";
import {Subject} from "rxjs";
import {FormControl} from "@angular/forms";
import {ViewType} from "../../shared/model/types.interface";

@Component({
  selector: 'cas-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {

  data: Pageable<Organization> = {}
  requestParam: RequestParam = {page: 0, size: 10};
  refresh = new Subject<RequestParam>();

  viewType: ViewType = ViewType.TABLE;
  ViewType = ViewType;

  searchFormControl = new FormControl();
  viewFormControl = new FormControl();

  constructor(private organizationsService: OrganizationsService,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: organizationsState}));

    this.refresh.pipe(
      tap((requestParam: RequestParam) => this.requestParam = requestParam),
      tap(() => this.getOrganizations())
    ).subscribe()

    this.searchFormControl.valueChanges.pipe(
      tap((search: string) => this.requestParam.search = search),
      tap(() => this.getOrganizations())
    ).subscribe();

    this.viewFormControl.valueChanges.pipe(
      tap((viewType: ViewType) => this.viewType = viewType),
      tap(() => this.getOrganizations())
    ).subscribe();
  }

  getOrganizations(): void {
    this.organizationsService.getOrganizations(this.requestParam).pipe(
      tap((response: Pageable<Organization>) => this.data = response),
    ).subscribe()
  }
}
