import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ACTION_DISABLE_EDIT} from "../../../store/app/app.actions";

@Component({
  selector: 'cas-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss']
})
export class OrganizationEditComponent {

  constructor(private store: Store) {
    this.store.dispatch(ACTION_DISABLE_EDIT());
  }
}
