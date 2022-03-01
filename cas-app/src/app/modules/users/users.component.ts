import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ACTION_SET_NAVIGATION} from "../../store/app/app.actions";
import {usersPageState} from "../../store/app/app.const";
import {tap} from "rxjs/operators";
import {UsersService} from "./users.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ViewType} from 'src/app/shared/model/types.interface';
import {VIEW_LIST, VIEW_TABLE} from "../../shared/const/view.const";

@Component({
  selector: 'cas-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  views = [VIEW_TABLE, VIEW_LIST]
  view: ViewType = ViewType.TABLE;
  ViewType = ViewType;

  filters: FormGroup = this.formBuilder.group({
    search: new FormControl(null),
    organization: new FormControl(null),
    view: new FormControl(this.view)
  })

  constructor(private usersService: UsersService,
              private formBuilder: FormBuilder,
              private store: Store) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: usersPageState}));

    this.filters.valueChanges.pipe(
      tap((filters: any) => this.view = filters.view),
    ).subscribe();
  }
}
