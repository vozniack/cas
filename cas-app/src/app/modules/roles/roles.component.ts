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
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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

  view: ViewType = ViewType.TABLE;
  ViewType = ViewType;

  filters: FormGroup = this.formBuilder.group({
    search: new FormControl(null),
    organization: new FormControl(null),
    view: new FormControl(this.view)
  })

  constructor(private rolesService: RolesService,
              private formBuilder: FormBuilder,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: rolesState}));

    this.refresh.pipe(
      tap((requestParam: RequestParam) => this.requestParam = requestParam),
      tap(() => this.getRoles())
    ).subscribe()

    this.filters.valueChanges.pipe(
      tap((filters: any) => {
        this.requestParam.search = filters.search;
        this.requestParam.organizationId = filters.organization;
        this.view = filters.view;
      }),
      tap(() => this.getRoles())
    ).subscribe();
  }

  getRoles(): void {
    this.rolesService.getRoles(this.requestParam).pipe(
      tap((response: Pageable<Role>) => this.data = response),
    ).subscribe()
  }
}
