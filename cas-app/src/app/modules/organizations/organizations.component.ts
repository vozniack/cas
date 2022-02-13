import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {NavigationState} from "../../shared/store/navigation/navigation.state";
import {ACTION_SET_NAVIGATION} from "../../shared/store/navigation/navigation.actions";
import {organizationsState} from "../../shared/store/navigation/navigation.const";
import {OrganizationsService} from "./organizations.service";
import {tap} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ViewType} from "../../shared/model/types.interface";
import {VIEW_TABLE, VIEW_TREE} from "../../shared/const/view.const";

@Component({
  selector: 'cas-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {

  views = [VIEW_TABLE, VIEW_TREE]
  view: ViewType = ViewType.TABLE;
  ViewType = ViewType;

  filters: FormGroup = this.formBuilder.group({
    search: new FormControl(null),
    view: new FormControl(this.view)
  })

  constructor(private organizationsService: OrganizationsService,
              private formBuilder: FormBuilder,
              private store: Store<NavigationState>) {
    this.store.dispatch(ACTION_SET_NAVIGATION({navigationState: organizationsState}));

    this.filters.valueChanges.pipe(
      tap((filters: any) => this.view = filters.view),
    ).subscribe();
  }
}
