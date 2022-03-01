import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Organization} from "../organizations.interface";
import {Store} from "@ngrx/store";
import {ACTION_SET_RESOURCE} from "../../../store/app/app.actions";

@Component({
  selector: 'cas-organization-view',
  templateUrl: './organization-view.component.html',
  styleUrls: ['./organization-view.component.scss']
})
export class OrganizationViewComponent {

  organization!: Organization;

  constructor(private store: Store,
              private activatedRoute: ActivatedRoute) {
    this.organization = this.activatedRoute.snapshot.data['organization'];
    this.store.dispatch(ACTION_SET_RESOURCE({resource: {name: 'organizations', id: this.organization.id}}));
  }
}
