import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ACTION_SET_NAVIGATION} from "../../store/app/app.actions";
import {rolesPageState} from "../../store/app/app.const";
import {tap} from "rxjs/operators";
import {RolesService} from "./roles.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ViewType} from 'src/app/shared/model/types.interface';
import {VIEW_LIST, VIEW_TABLE} from "../../shared/const/view.const";

@Component({
  selector: 'cas-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  views = [VIEW_TABLE, VIEW_LIST]
  view: ViewType = ViewType.TABLE;
  ViewType = ViewType;

  filters: FormGroup = this.formBuilder.group({
    search: new FormControl(null),
    organization: new FormControl(null),
    view: new FormControl(this.view)
  })

  constructor(private rolesService: RolesService,
              private formBuilder: FormBuilder,
              private store: Store) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: rolesPageState}));

    this.filters.valueChanges.pipe(
      tap((filters: any) => this.view = filters.view),
    ).subscribe();
  }
}
