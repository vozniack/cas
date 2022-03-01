import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ACTION_SET_NAVIGATION} from "../../store/app/app.actions";
import {adminPageState} from "../../store/app/app.const";
import {Organization} from "../organizations/organizations.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'cas-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  organization!: Organization;

  constructor(private store: Store,
              private activatedRoute: ActivatedRoute) {
    this.store.dispatch(ACTION_SET_NAVIGATION({page: adminPageState}))
    this.organization = this.activatedRoute.snapshot.data['organization'];
  }
}
