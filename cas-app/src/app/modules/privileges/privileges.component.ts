import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {privilegesState} from "../../shared/store/navigation/navigation.const";
import {tap} from "rxjs/operators";
import {PrivilegesService} from "./privileges.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ViewType} from 'src/app/shared/model/types.interface';
import {VIEW_TABLE, VIEW_TREE} from "../../shared/const/view.const";

@Component({
  selector: 'cas-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent {

  views = [VIEW_TABLE, VIEW_TREE]
  view: ViewType = ViewType.TREE;
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

    this.filters.valueChanges.pipe(
      tap((filters: any) => this.view = filters.view)
    ).subscribe();
  }
}
