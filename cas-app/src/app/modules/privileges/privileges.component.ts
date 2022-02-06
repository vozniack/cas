import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {privilegesState} from "../../shared/store/navigation/navigation.const";
import {tap} from "rxjs/operators";
import {Pageable} from "../../shared/model/pageable.interface";
import {RequestParam} from "../../shared/model/request.interface";
import {PrivilegesService} from "./privileges.service";
import {Privilege} from "./privileges.interface";
import {Subject} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ViewType} from 'src/app/shared/model/types.interface';

@Component({
  selector: 'cas-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent {

  data: Pageable<Privilege> = {}
  requestParam: RequestParam = {page: 0, size: 10};
  refresh = new Subject<RequestParam>();

  view: ViewType = ViewType.TABLE;
  ViewType = ViewType;

  filters: FormGroup = this.formBuilder.group({
    search: new FormControl(null),
    organization: new FormControl(null),
    view: new FormControl(this.view)
  })

  constructor(private privilegesService: PrivilegesService,
              private formBuilder: FormBuilder,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: privilegesState}));

    this.refresh.pipe(
      tap((requestParam: RequestParam) => this.requestParam = requestParam),
      tap(() => this.getPrivileges())
    ).subscribe()

    this.filters.valueChanges.pipe(
      tap((filters: any) => {
        this.requestParam.page = 0;
        this.requestParam.search = filters.search;
        this.requestParam.organizationId = filters.organization;
        this.view = filters.view;
      }),
      tap(() => this.getPrivileges())
    ).subscribe();
  }

  getPrivileges(): void {
    this.privilegesService.getPrivileges(this.requestParam).pipe(
      tap((response: Pageable<Privilege>) => this.data = response),
    ).subscribe()
  }
}
