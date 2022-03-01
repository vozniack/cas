import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ACTION_SET_NAVIGATION} from "../../store/app/app.actions";
import {organizationsPageState} from "../../store/app/app.const";
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
              private store: Store) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: organizationsPageState}));

    this.filters.valueChanges.pipe(
      tap((filters: any) => this.view = filters.view),
    ).subscribe();
  }
}
